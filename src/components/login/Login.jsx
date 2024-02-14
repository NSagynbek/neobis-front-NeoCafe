import "./login.css";
import { toast } from 'react-toastify';
import {Formik,Form,Field,ErrorMessage} from "formik"
import * as yup from "yup"
import {InputAdornment,IconButton} from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {useState} from "react";
import { useNavigate } from 'react-router';
import { loginImage } from "../../assets";
import { login } from "../../api";
import { setCookie } from "../../api/tokenService";
import { loginSchema } from "../../schemas";

const initialValues={
  username:"",
  password:"",
} 

const validationSchema = yup.object(loginSchema);

function Login() {
  const navigate = useNavigate();
  const [isPassword,setIsPassword] = useState(false);
  const [isError,setIsError] = useState(false);
  
  const onSubmit = async (values)=>{
    console.log(values)
    try{
        const response = await login(values);
        console.log(response.data)
        setCookie('tokenData', JSON.stringify(response.data), 7);
        // navigate('/admin-page');
    }catch(error){
      setIsError(!isError);
      showToast(error.response.data.error);
    }

  }

  const handlePasswordVisibility = ()=>{
    setIsPassword(!isPassword);
  }

  const showToast = (msg) => {
    toast.error(msg);
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
                id="username"
                name="username"
                placeholder="Логин"
                className={isError?"error":"email-input"}
              />
              
              </div>
            <div className="password-input-container">
              <Field
                type={isPassword?"text":"password"}
                id="password"
                name="password"
                placeholder = "Пароль"
                className={isError?"error":"password-input"}
              />
              

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
    </div>
  );
}

export default Login;
