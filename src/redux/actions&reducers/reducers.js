import {
    LOGIN_SUCCESS,
    SIGNUP_SUCCESS,
    OPEN_MODAL,
    CLOSE_MODAL,
    MENU_CATEGORY_REFRESH,
    MENU_CATEGORY_SELECT,
    INGREDIENTS,
    EMPLOYEE_CONTENT_TOGGLE,
    INGREDIENTS_REFRESH,
    REFRESH_STOCK_ITEMS,
  } from "./actionTypes";
  
  const initialState = {
    isAuthenticated: true,
    isOpen: false,
    modalData: {},
    rerender:0,
    category:"",
    ingredients:[],
    isSchedule:false,
    refreshStock:0,
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
        
      case REFRESH_STOCK_ITEMS:
        return {
          ...state,
          refreshStock:state.refreshStock+1,
        }  
      
      case MENU_CATEGORY_SELECT:
        return {
          ...state,
            category:action.payload,
        }
        
      case INGREDIENTS:
        return {
          ...state,
            ingredients:[...state.ingredients,action.payload],
        }  
      case EMPLOYEE_CONTENT_TOGGLE:
        return {
          ...state,
            isSchedule:!state.isSchedule,
        }
        
      case INGREDIENTS_REFRESH:
        return {
          ...state,
          ingredients:[]
        }  
      
      default:
        return state;
    }
  };
  
  export default reducer;