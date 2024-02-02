import { useState, useRef } from 'react';
import './otpInputStyles.css';

function OTPInput() {
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
    <div className="otp-container">
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
          className='otp-input'
        />
      ))}
    </div>
  );
}

export default OTPInput;

