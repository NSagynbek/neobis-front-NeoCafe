import "./login.css";
import { useDispatch } from "react-redux";
import {openModal} from "../../redux/index";
import { toast } from 'react-toastify';
import {Formik,Form,Field,ErrorMessage} from "formik"
import * as yup from "yup"
import TextError from "../textError/TextError";
import {InputAdornment,IconButton} from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {useState} from "react";
import { loginImage } from "../../assets";
import { login } from "../../api";

const initialValues={
  email:"",
  password:"",
} 

const validationSchema = yup.object({
  email: yup.string().required("пожалуйста, введите имя пользователя"),
  password: yup.string().required("пожалуйста, введите ваш пароль")
})

function Login() {
  const [isPassword,setIsPassword] = useState(false);
  const [isError,setIsError] = useState(false);
  // const dispatch = useDispatch();

  // const handleOpenModal = () => {
  //   dispatch(
  //     openModal({
  //       name: "notification",
  //       props: {
  //         onchange: () => {},
  //         onSubmit: () => {},
  //         title: "Change phone number",
  //       },
  //     })
  //   );
  // };

  const onSubmit = async ()=>{
    try{
      // const response = await login(data);
    }catch(error){
      setIsError(!isError);
      showToast();
    }

  }

  const handlePasswordVisibility = ()=>{
    setIsPassword(!isPassword);
  }

  const showToast = () => {
    toast.error('Данные введены неверно, попробуйте еще раз');
  };

  return (
    <div className="login">
      <div className="logo-text">
        <span className="neo">neo</span>
        <span className="cafe">cafe</span>
      </div>
      <div className="login-inputs">
        <p className="login-inputs__title">Вход</p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formikProps)=>(
            <Form 
              className="login-inputs__form"
            >
              <div>
              <Field
                type="text"
                id="email"
                name="email"
                placeholder="Электронная почта"
                className={isError?"error":"email-input"}
              />
              {/* <ErrorMessage name="email" component={TextError}/> */}
              </div>
            <div className="password-input-container">
              <Field
                type={isPassword?"text":"password"}
                id="password"
                name="password"
                placeholder = "Пароль"
                className={isError?"error":"password-input"}
              />
              {/* <ErrorMessage name="password" component={TextError}/> */}

              <InputAdornment position="end" className="password-icons">
                <IconButton 
                  onClick={handlePasswordVisibility} 
                  edge="end"
                >
                  {isPassword?(
                    <VisibilityIcon 
                      style={{ color:formikProps.dirty&&formikProps.isValid?"#35536B":"" }}
                    />
                    ):(<VisibilityOffIcon 
                      style={{ color:formikProps.dirty&&formikProps.isValid?"#35536B":"" }}
                    />)}
                </IconButton>
              </InputAdornment>
            </div>
              <button
                type="submit" 
                className={`loginBtn ${formikProps.dirty&&formikProps.isValid?"loginBtn-valid":""}`}
                disabled={!formikProps.dirty&&!formikProps.isValid}             
              >
                Войти
              </button>

            </Form>
          )}  
        </Formik>
      </div>
      <div className="login-image-container">
        <img 
          src={loginImage} 
          alt="Login Image" 
          className="login-image"
        />
      </div>

      {/* <h1 className="login">Login Page</h1>
      <button onClick={handleOpenModal}>Button</button>
      <button onClick={showToast}>Toast</button> */}
    </div>
  );
}

export default Login;
