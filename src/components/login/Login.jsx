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

const initialValues ={
  email:"",
  password:"",
} 

const validationSchema = yup.object({
  username: yup.string().required("пожалуйста, введите имя пользователя"),
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

    }catch(error){
      setIsError(!isError);
    }

  }

  const handlePasswordVisibility = ()=>{
    setIsPassword(!isPassword);
  }

  const showToast = () => {
    toast.success('This is a success message');
  };

  return (
    <div className="login">
      <div>
        <p>Вход</p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formikProps)=>(
            <Form>
              <Field
                type="text"
                id="login"
                name="email"
                placeholder="Электронная почта"
                // className={error?"error":""}
              />
              <ErrorMessage name="email" component={TextError}/>

              <Field
                type={isPassword?"text":"password"}
                id="password"
                name="password"
                placeholder = "Пароль"
                className={isError?"error":""}
              />
              <ErrorMessage name="password" component={TextError}/>

              <InputAdornment position="end" className="mu-icon">
                <IconButton onClick={handlePasswordVisibility} edge="end">
                  {isPassword?(
                    <VisibilityIcon style={{ color:formikProps.dirty&&formikProps.isValid?"#5458EA":"" }}/>
                    ):(<VisibilityOffIcon 
                      style={{ color:formikProps.dirty&&formikProps.isValid?"#5458EA":"" }}/>)}
                </IconButton>
              </InputAdornment>

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

      <div>
        <img src={loginImage} alt="Login Image" />
      </div>

      {/* <h1 className="login">Login Page</h1>
      <button onClick={handleOpenModal}>Button</button>
      <button onClick={showToast}>Toast</button> */}
    </div>
  );
}

export default Login;
