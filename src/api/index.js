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
export const editMenuItem = async (id,payload)=>{
  const response = await instance.patch(`menu/item/${id}/`,payload,{
    headers:{
      'Content-Type': 'multipart/form-data',
    }
  })
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

export const readyStockItems = async (page)=>{
  const response = await instance.get(`stock/items/enough/?page=${page}`)
  return response.data
}

export const rawStockItems = async (page)=>{
  const response = await instance.get(`stock/items/raw_enough/?page=${page}`)
  return response.data
}

export const finishingStockItems = async (page)=>{
  const response = await instance.get(`stock/items/not_much/?page=${page}`)
  return response.data
}

export const addStock = async (newStock)=>{
  const responce = await instance.post("stock/items/add/",newStock,)
  return responce.data
}

export const deleteStock = async (id)=>{
  const response = await instance.delete(`stock/items/${id}/`)
  return response.data
}

export const getstockItem = async (id)=>{
  const response = await instance.get(`stock/items/${id}/`)
  return response.data
}

export const editStock = async (id,payload)=>{
  const response = await instance.patch(`stock/items/${id}/`,payload)
  return response.data
}





// Запросы по разделу филиалы
export const getBranches = async ()=>{
  const res = await instance.get("branch/all/")
  return res.data
}


export const addNewBranch = async (payload) => {
  const res = await instance.post("branch/add/", payload,{
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  });
  return res.data;
};


export const deleteBranch = async (id)=>{
  const res = await instance.delete(`branch/${id}/`)
  return res.data
}

export const getBranchById = async (id)=>{
  const res = await instance.get(`branch/${id}/`)
  return res.data
}

export const editBranch = async (id,payload)=>{
  const res = await instance.patch(`branch/${id}/`,payload,{
    headers:{
      'Content-Type': 'multipart/form-data',
    }
  })
  return res.data
}

// Запросы по разделу сотрудники
export const getEmployees = async (page)=>{
  const res = await instance.get(`employee/all/?page=${page}`)
  return res.data
}









