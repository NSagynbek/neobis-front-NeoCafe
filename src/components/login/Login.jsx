import "./login.css";
import { useDispatch } from "react-redux";
import {openModal} from "../../redux/index";
import { toast } from 'react-toastify';
import {Formik,Form,Field,ErrorMessage} from "formik"
import * as yup from "yup"
import {InputAdornment,IconButton} from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {useState} from "react";
import { loginImage } from "../../assets";
// import { login } from "../../api";
import axios from "axios";

const initialValues={
  username:"",
  password:"",
} 

const validationSchema = yup.object({
  username: yup.string().required("пожалуйста, введите ваш логин"),
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

  const onSubmit = async (values)=>{
    console.log(values)
    try{
        // const response = await login(values);
        const response = await axios.post("https://tokyo-backender.org.kg/cafe/admin/login/",values,{
          headers: {
            'Content-Type': 'application/json',
          }
        })
        console.log(response)
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
                placeholder="Электронная почта"
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

      {/* <h1 className="login">Login Page</h1>
      <button onClick={handleOpenModal}>Button</button>
      <button onClick={showToast}>Toast</button> */}
    </div>
  );
}

export default Login;
