import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import { Data } from "./Data";

const chartSetting = {
  yAxis: [
    {
      label: 'Carbon in gallons (gal)',
    },
  ],
  width: 1000,
  height: 400,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-10px, 0px)',
      marginLeft: '1000px'
    },
  },
};

const valueFormatter = (value) => `${value}mm`;

const Graph = () => {
  const [dataset, setDataset] = useState([]);
  const [carbon, setCarbon] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Data(Number(localStorage.getItem("id")));
        const sums = data.map(item => item.fuel + item.travel + item.electricity);
        // Check if any sum is greater than or equal to 500
        const hasHighCarbon = sums.some(sum => sum >= 900);
        setCarbon(hasHighCarbon);
        setDataset(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setDataset([]);
      }
    };

    fetchData();
  }, []);

  return (
    <Wrapper>
      <div className="container" style={{paddingRight : "100px",paddingLeft :"100px", overflowX:"hidden"}}>
          <div className="modal" style={{paddingLeft:"170px", marginTop:"20px", overflowX:"hidden"}}>
          <div className="modal-container">
            <div className="modal-left">
              <h1 className="modal-title">Results!</h1>
              <p className="modal-desc"></p>
              <form>
                {Array.isArray(dataset) && dataset.length > 0 && ( // Check if dataset is an array and not empty
                  <BarChart
                    dataset={dataset}
                    xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                    series={[
                      { dataKey: 'fuel', label: 'Fuel', valueFormatter },
                      { dataKey: 'travel', label: 'Travel', valueFormatter },
                      { dataKey: 'electricity', label: 'Electricity', valueFormatter }
                    ]}
                    {...chartSetting}
                  />
                )}
                {carbon ? <p>Please reduce the use of carbon!!</p> : <p>Good you are reduing the use of carbon!!</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
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

export default Graph;
