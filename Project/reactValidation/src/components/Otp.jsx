import React, { useState } from 'react';
import '../assets/OTPComponent.css'; // Import CSS file for styling (optional)
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const OTPComponent = () => {
  let navigate = useNavigate();
  let realOtp = useParams().otp;
  realOtp = realOtp.substring(4, 8);
  const [otp, setOTP] = useState(['', '', '', '']); // Array to hold OTP values
  const[text, setText] = useState('');

  // Function to handle input change
  const handleChange = (index, value) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    // Move focus to next input field if value is entered
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  // Function to handle key press events
  const handleKeyDown = (index, e) => {
    // Move focus to previous input field on Backspace if current input is empty
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  // JSX for rendering input boxes
  const renderInputs = () => {
    return otp.map((value, index) => (
      <input
        key={index}
        id={`otp-input-${index}`}
        type="text"
        maxLength="1"
        value={value}
        onChange={(e) => handleChange(index, e.target.value)}
        onKeyDown={(e) => handleKeyDown(index, e)}
        className="otp-input"
      />
    ));
  };

  // Function to handle OTP submission
  const handleSubmit = () => {
    const enteredOTP = otp.join('');
    if(enteredOTP === realOtp){
      navigate("/loading");
      setTimeout(() => {
        window.location.href = '/home/homeland';
        setText('');
      }, 2000)
    }else{
        setText('Invalid OTP');
    }
    // You can perform further actions here, such as sending the OTP to a server for verification
  };

  return (
    <div className="otp-container">
      <h2>Enter OTP</h2>
      <div className="otp-input-container">{renderInputs()}</div>
      <button onClick={handleSubmit} className="submit-button">
        Submit
      </button>
      <p style={{color : "red"}}>{text}</p>
    </div>
  );
};

export default OTPComponent;
