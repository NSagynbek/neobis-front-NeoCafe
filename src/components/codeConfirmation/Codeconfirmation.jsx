import "./codeconfirmation.css";
import { loginImage } from "../../assets";
import { useState } from "react";
import { authorize } from "../../api";
import OTPInput from "../otpInput/OtpInput";

function CodeConfirmation (){
    const [error,setError]= useState(null);

    const handleClick = async (code)=>{
        try{
            // const response = await authorize(code)
        }catch(error){
            // setError(error.message)      
        }
    }
    
    return (
        <main className="login">
            <header className="logo-text">
                <span className="neo">neo</span>
                <span className="cafe">cafe</span>
            </header>

            <section className="login-inputs">
              <div className="code-container">
                <p 
                  className="code-content__title"
                >
                  Код подтверждения
                </p>
                <OTPInput error={error}/>   
                <button
                  type="submit" 
                  className="loginBtn-valid"           
                >
                  Войти
                </button>

                <p>Отправить повторно</p>
              </div>
            </section>
            <section className="login-image-container">
                <img 
                  src={loginImage} 
                  alt="login-image"
                  className="login-image"
                  onClick={handleClick}
                />
            </section>
        </main>
    )
}

export default CodeConfirmation;