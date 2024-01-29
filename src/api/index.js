import instance from "./axiosConfig"
import muliPartinstance from "./axiosConfigMuliPart"

export const login = async (data)=>{
    const res = await instance.post("api/v1/auth/login",data)
    return res.data
}

export const signup = async (data)=>{
    const res = await instance.post("api/v1/auth/registration",data)
    return res.data
}