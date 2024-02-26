import axios from 'axios';
  import {getCookie,setCookie,removeCookie} from './tokenService';


  const instance = axios.create({
    baseURL: 'https://tokyo-backender.org.kg/',
    headers: {
      'Content-Type': 'application/json',
    },
  });





   instance.interceptors.request.use(
     async (config) => {
       const excludedEndpoints = ["cafe/admin/login/"];
       if(!excludedEndpoints.some(endpoint=>config.url.endsWith(endpoint))){
        const token = JSON.parse(getCookie("tokenData")); 
         if (token) {
           config.headers.Authorization = `Bearer ${token.access_token}`;
         }
       }
         return config;
     },
     (error) => {
       return Promise.reject(error);
     }
   );



  let retryCounter = 0;

 instance.interceptors.response.use(
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
         token: token.refresh_token,
       };

       try {
         const response = await instance.post("token/refresh/",formData);
         setCookie('tokenData', JSON.stringify(response.data), 7); 
         originalRequest.headers.Authorization = `Bearer ${response.data.access}`;
         retryCounter = 0; 
         return instance(originalRequest);
       } catch (refreshError) {
       
         console.error('Error refreshing token:', refreshError);

        
         return Promise.reject(refreshError);
       }
     }
     return Promise.reject(error);
   }
 );


export default instance;