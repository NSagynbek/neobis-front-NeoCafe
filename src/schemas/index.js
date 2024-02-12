import * as yup from "yup"

const loginSchema = {
    username: yup.string().required("пожалуйста, введите ваш логин"),
    password: yup.string().required("пожалуйста, введите ваш пароль")
}



export {loginSchema}