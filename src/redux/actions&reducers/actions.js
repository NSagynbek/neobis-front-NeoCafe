import {
    LOGIN_SUCCESS, 
    SIGNUP_SUCCESS,
    OPEN_MODAL,
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
  type: "OPEN_MODAL",
  payload: modalData,
});

export const closeModal = () => ({
  type: "CLOSE_MODAL",
});