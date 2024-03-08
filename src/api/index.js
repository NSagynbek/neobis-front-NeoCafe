// import instance from "./axiosConfig"
import { imageListClasses } from "@mui/material";
import axios from "axios";
const instance = axios.create({
    baseURL: 'https://tokyo-backender.org.kg/',
    headers: {
      'Content-Type': 'application/json',
    },
  });




export const login = async (data)=>{
    const res = await instance.post("cafe/admin/login/",data)
    return res
}

export const getMenuItems = async (page)=>{
    const res = await instance.get(`menu/item/all/?page=${page}`)
    return res.data
}

// Категории Меню
export const getMenuCategories = async ()=>{
  const res = await instance.get("menu/category/all/")
  return res.data
}

export const deleteMenuCategory = async (id)=>{
  const res = await instance.delete(`menu/category/${id}/`)
  return res.data
}

export const deleteMenuItem = async (id)=>{
  const res = await instance.delete(`menu/item/${id}/`)
  return res.data
}

export const addMenuCategory = async (payload)=>{
  const res = await instance.post("menu/category/add/",payload)
  return res.data
}

// Добовление Позиции меню

export const addNewMenuItem = async (payload) => {
  const res = await instance.post("menu/item/add/", payload,{
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  });
  return res.data;
};
//Запрос для редоктирования меню позиции
export const editMenuItem = async (id)=>{
  const response = await instance.patch(`menu/item/${id}/`)
  return response.data
}

//Запрос для получение данных одной меню позиции по id

export const getMenuItemDetails = async (id)=>{
  const responce = await instance.get(`menu/item/${id}/`)
  return responce.data
}

// Запросы по разделу склад
export const getStock = async (page)=>{
  const res = await instance.get(`stock/items/all/?page=${page}`)
  return res.data
}

// Запросы по разделу филиалы
export const getBranches = async ()=>{
  const res = await instance.get("branch/all/")
  return res.data
}

// Запросы по разделу сотрудники
export const getEmployees = async (page)=>{
  const res = await instance.get(`employee/all/?page=${page}`)
  return res.data
}









