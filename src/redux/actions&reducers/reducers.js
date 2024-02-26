import {
    LOGIN_SUCCESS,
    SIGNUP_SUCCESS,
    OPEN_MODAL,
    CLOSE_MODAL,
    MENU_CATEGORY,
  } from "./actionTypes";
  
  const initialState = {
    isAuthenticated: true,
    isOpen: false,
    modalData: {},
    menuCategory:[]
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
          ...state,
          isOpen: false,
          modalData: {},
        }

      case MENU_CATEGORY:
        return {
          ...state,
           menuCategory:[...state.menuCategory,...action.payload],
        }  
  
      default:
        return state;
    }
  };
  
  export default reducer;