import instance from "./applicationJsonConfig"
import muliPartinstance from "./multipartFormdataconfig"

export const login = async (data)=>{
    const res = await instance.post("cafe/admin/login/",data)
    return res
}

export const authorize = async (data)=>{
    const res = await instance.post("api/v1/auth/login/",data)
    return res.data
}

export const getMenuItems = async ()=>{
    const res = await instance.get("menu/item/all/")
    return res.data
}


