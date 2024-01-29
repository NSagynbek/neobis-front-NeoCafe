import {
    LOGIN_SUCCESS,
    SIGNUP_SUCCESS,
    OPEN_MODAL,
    CLOSE_MODAL,
  } from "./actionTypes";
  
  const initialState = {
    isAuthenticated: false,
    isOpen: false,
    modalData: {},
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return {
          ...state, 
          isAuthenticated: true,
          
        };
      case SIGNUP_SUCCESS:
        return {
          ...state,
          loading: false,
         
        }
      
      case OPEN_MODAL:
        return {
          ...state,
          isOpen:true,
          modalData:action.payload,
        } 
      case CLOSE_MODAL:
        return {
          isOpen: false,
          modalData: {},
        }
  
      default:
        return state;
    }
  };
  
  export default reducer;