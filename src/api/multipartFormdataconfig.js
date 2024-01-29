import axios from 'axios';
  import {getCookie,setCookie,removeCookie} from './tokenService';


  const muliPartinstance = axios.create({
    baseURL: 'https://mobi-market-production.up.railway.app/',
    headers: {
      'Content-Type': 'multipart/form-data', 
    },
  });





  muliPartinstance.interceptors.request.use(
     async (config) => {
       const excludedEndpoints = ["api/v1/auth/login", "api/v1/users/refreshToken"];
       if(!excludedEndpoints.some(endpoint=>config.url.endsWith(endpoint))){
         const token = JSON.parse(getCookie("tokenData"));   
         if (token) {
           config.headers.Authorization = `Bearer ${token.accessToken}`;
         }
       }
         return config;
     },
     (error) => {
       return Promise.reject(error);
     }
   );



  let retryCounter = 0;

  muliPartinstance.interceptors.response.use(
   (response) => {
     return response;
   },
   async (error) => {
     const originalRequest = error.config;
     if (error.response.status === 403 && !originalRequest._retry && retryCounter < 3) {
       originalRequest._retry = true;
       retryCounter++;

       const token = JSON.parse(getCookie("tokenData"));  

       const formData = {
         token: token.refreshToken,
       };

       try {
         const response = await muliPartinstance.post("api/v1/users/refreshToken",formData);
         setCookie('tokenData', JSON.stringify(response.data), 7); //very important here to receive as a response object containing access and refresh tokens.
         originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
         retryCounter = 0; 
         return muliPartinstance(originalRequest);
       } catch (refreshError) {
       
         console.error('Error refreshing token:', refreshError);

        
         return Promise.reject(refreshError);
       }
     }
     return Promise.reject(error);
   }
 );


export default muliPartinstance;