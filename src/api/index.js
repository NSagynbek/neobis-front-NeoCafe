// import instance from "./axiosConfig"
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

export const getMenuItems = async ()=>{
    const res = await instance.get("menu/item/all/")
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

export const addMenuCategory = async (payload)=>{
  const res = await instance.post("menu/category/add/",payload)
  return res.data
}

// Добовление Позиции меню

export const addNewMenuItem = async (payload) => {
  const res = await instance.post("menu/item/add/", payload);
  return res.data;
};





