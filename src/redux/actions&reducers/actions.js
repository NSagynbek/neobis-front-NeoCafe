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
  } from "./actionTypes"

export const loginSuccess = (jwt) => {
  return{
    type: LOGIN_SUCCESS,
    payload: jwt,
  }
};
  
export const signupSuccess = (message) => {
  return{
    type: SIGNUP_SUCCESS,
    payload:message
  }
};

export const openModal = (modalData) => ({
  type: OPEN_MODAL,
  payload: modalData,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const updateMenuCategory = ()=>({
  type:MENU_CATEGORY_REFRESH,
})

export const refreshStockItems = ()=>({
  type:REFRESH_STOCK_ITEMS,
})

export const selectMenuCategory = (category)=>({
  type:MENU_CATEGORY_SELECT,
  payload:category,
})

export const selectIngredients = (ingredient)=>({
  type:INGREDIENTS,
  payload:ingredient,
})

export const employeeContentToggle = ()=>({
  type:EMPLOYEE_CONTENT_TOGGLE,
})

export const ingredientsRefresh = ()=>({
  type:INGREDIENTS_REFRESH,
})