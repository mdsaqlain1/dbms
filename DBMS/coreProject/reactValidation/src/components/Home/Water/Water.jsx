import React from "react";
import styled from "styled-components";
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState } from "react";



const Water = () => {
  let navigate = useNavigate();
  const initialInputState = {
    flights : '',
    bike : '',
    car : '',
  };
  const [submit, setSubmit] = useState(false);
  const [values, setValues] = useState(initialInputState);
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedValues = {};
    Object.keys(values).forEach(key => {
      trimmedValues[key] = values[key].trim();
    });
    const emptyFields = Object.keys(trimmedValues).filter(key => trimmedValues[key] === '');
    if (emptyFields.length > 0) {
      alert('Please fill in all fields before submitting.');
    } else {
      setSubmit(true);
      let valuesOf = {
        id : localStorage.getItem("id"),
        flights : values.flights,
        bike : values.bike,
        car :  values.car
      }
      let data = {
        id : localStorage.getItem("id"),
        value : Number(values.flights) + Number(values.bike) + Number(values.car)
      }
      setSubmit(true);
      axios.post("http://localhost:3000/api/traveldata/", data)
      axios.post("http://localhost:3000/api/travel/", valuesOf)
    }
  };
  
  
  return (
    <>
      <Wrapper>
      <div className="container" style={{paddingRight : "100px",paddingLeft :"100px", overflowX:"hidden"}}>
          <div className="modal" style={{paddingLeft:"170px", marginTop:"20px", overflowX:"hidden"}}>
            <div className="modal-container">
              <div className="modal-left">
                <h1 className="modal-title">Track Transportation!</h1>
                <p className="modal-desc"> Please minimize unnecessary travel 
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="input-block">
                    <label htmlFor="flights" className="input-label">
                      No. of fligths taken in a year*
                    </label>
                    <input
                      type="number"
                      autoComplete="off"
                      name="flights"
                      id="flights"
                      placeholder="In numbers"
                      value={values.flights}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-block">
                    <label htmlFor="car" className="input-label">
                      Average distance travelled in car*
                    </label>
                    <input
                      type="number"
                      autoComplete="off"
                      name="car"
                      id="car"
                      placeholder="In km"
                      value={values.car}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-block">
                    <label htmlFor="bike" className="input-label">
                      Average distance travelled in bike*
                    </label>
                    <input
                      type="number"
                      autoComplete="off"
                      name="bike"
                      id="bike"
                      placeholder="In km"
                      value={values.bike}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="modal-buttons" style={{display : "flex"}}>
                    <button className="input-button" type="submit">
                      Submit
                    </button>
                    {submit ? <button 
                      onClick={()=>{
                        navigate("/home/electricity")
                      }}
                      className="input-button" type="submit">
                        Next
                      </button> : ''}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .container {
    /*position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #efedee;
    display: flex;
    justify-content: center;
    align-items: center;*/
    overflowX:hidden;
    max-height: 70vh;
  }

  .modal {
    width: 100%;
    /* height: 60px; */
    // background: rgba(51, 51, 51, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
    overflowX:hidden;
  }
  .modal-container {
    display: flex;
    max-width: 70vw;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: absolute;
    overflowX:hidden;
    transition-duration: 0.3s;
    background: #fff;
  }
  .modal-title {
    margin: 0;
    font-weight: 400;
    color: #55311c;
  }
  .form-error {
    font-size: 1.4rem;
    color: #b22b27;
  }
  .modal-desc {
    margin: 6px 0 30px 0;
  }
  .modal-left {
    padding: 60px 30px 20px;
    background: #fff;
    flex: 1.5;
    transition-duration: 0.5s;
    opacity: 1;
  }

  .modal-right {
    flex: 2;
    font-size: 0;
    transition: 0.3s;
    overflow: hidden;
  }
  .modal-right img {
    width: 100%;
    height: 100%;
    transform: scale(1);
    -o-object-fit: cover;
    object-fit: cover;
    transition-duration: 1.2s;
  }

  .modal.is-open .modal-left {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 0.1s;
  }
  .modal-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modal-buttons a {
    color: rgba(51, 51, 51, 0.6);
    font-size: 14px;
  }

  .sign-up {
    margin: 60px 0 0;
    font-size: 14px;
    text-align: center;
  }
  .sign-up a {
    color: #8c7569;
  }

  .input-button {
    padding: 1.2rem 3.2rem;
    outline: none;
    text-transform: uppercase;
    border: 0;
    color: #fff;
    border-radius: 4px;
    background: #00ab41;
    transition: 0.3s;
    cursor: pointer;
    font-family: "Nunito", sans-serif;
  }
  .input-button:hover {
    background: #008631;
  }

  .input-label {
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.7px;
    color: #8c7569;
    transition: 0.3s;
  }

  .input-block {
    display: flex;
    flex-direction: column;
    padding: 10px 10px 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 20px;
    transition: 0.3s;
  }
  .input-block input {
    outline: 0;
    border: 0;
    padding: 4px 0 0;
    font-size: 14px;
  }

  .input-block input::-moz-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input:-ms-input-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input::placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block:focus-within {
    border-color: #8c7569;
  }
  .input-block:focus-within .input-label {
    color: rgba(140, 117, 105, 0.8);
  }

  @media (max-width: 750px) {
    .modal-container {
      max-width: 90vw;
    }

    .modal-right {
      display: none;
    }
  }
`;

export default Water;
