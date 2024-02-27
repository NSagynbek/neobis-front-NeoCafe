import {
    LOGIN_SUCCESS,
    SIGNUP_SUCCESS,
    OPEN_MODAL,
    CLOSE_MODAL,
    MENU_CATEGORY_REFRESH,
    MENU_CATEGORY_SELECT,
    INGREDIENTS,
  } from "./actionTypes";
  
  const initialState = {
    isAuthenticated: true,
    isOpen: false,
    modalData: {},
    rerender:0,
    category:"",
    ingredients:"",
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

      case MENU_CATEGORY_REFRESH:
        return {
          ...state,
           rerender:state.rerender+1,
        }  
      
      case MENU_CATEGORY_SELECT:
        return {
          ...state,
            category:action.payload,
        }
        
      case INGREDIENTS:
        return {
          ...state,
            ingredients:action.payload,
        }    
      
  
      default:
        return state;
    }
  };
  
  export default reducer;