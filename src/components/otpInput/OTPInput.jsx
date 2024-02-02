import { useState, useRef } from 'react';
import './otpInputStyles.css';

function OTPInput({error}) {
  const [isError,setIsError] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef([]);
  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input box
    if (index < otp.length - 1 && value !== '') {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Move to the previous input box on backspace
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <main className='otp-container'>
      {isError?(
        <p className="otp-notification">
          Код неверный, попробуйте ещё раз
        </p>
      ):(
        null
      )}
     
      <div className="otp-input-container">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="tel"
            pattern="[0-9]*"
            inputMode="numeric"
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            maxLength={1}
            ref={(el) => (inputRefs.current[index] = el)}
            placeholder='_'
            className={isError?"otp-input-error":"otp-input"}
          />
        ))}
      </div>
    </main>
  );
}

export default OTPInput;

