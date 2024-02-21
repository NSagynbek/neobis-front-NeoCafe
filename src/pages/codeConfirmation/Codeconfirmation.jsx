import "./codeconfirmation.css";
import { loginImage } from "../../assets";
import { useState } from "react";
import { authorize } from "../../api";
import OTPInput from "../../components/otpInput/OtpInput";
import { useNavigate } from "react-router-dom";

function CodeConfirmation (){
    const [error,setError]= useState(null);
    const navigate = useNavigate();

    const handleClick = async ()=>{
      navigate("/admin-page")
         try{
        //     const response = await authorize(code)
         }catch(error){
        //     setError(error.message)      
         }
    }
    
    return (
        <main className="login">
            <section className="login-inputs">
            <header className="codePage-logo-text">
                <span className="code-neo">neo</span>
                <span className="code-cafe">cafe</span>
            </header>
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
                  onClick={handleClick}        
                >
                  Войти
                </button>
                <button 
                  className="resend-code"
                >
                  Отправить повторно
                </button>
              </div>
            </section>
            <section className="login-image-container">
                <img 
                  src={loginImage} 
                  alt="login-image"
                  className="login-image"
                />
            </section>
        </main>
    )
}

export default CodeConfirmation;