import React, { useEffect, useState } from "react";
import styles from "styled-components";
import {styled}  from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Data } from "../../GraphComponent/Data"; // Import the Data function

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));

const Fuel = () => {
  const [rows, setRows] = useState([]); // State to store table rows

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Data(Number(localStorage.getItem("id"))); // Fetch data
        // Transform fetched data into table rows format
        const tableRows = data.map((item, index) => createData(index + 1, item.fuel, item.electricity, item.travel));
        setRows(tableRows); // Update state with fetched rows
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to create a row object
  const createData = (index, fuel, electricity, travel) => ({
    index,
    fuel,
    electricity,
    travel
  });

  return (
    <>
    <Wrapper>
      <div className="container" style={{paddingRight : "100px",paddingLeft :"100px", overflowX:"hidden"}}>
          <div className="modal" style={{paddingLeft:"170px", marginTop:"20px", overflowX:"hidden"}}>
          <div className="modal-container">
            <div className="modal-left">
              <h1 className="modal-title">History!</h1>
              <p className="modal-desc">
              </p>
              <form>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>Sl no. </StyledTableCell>
                        <StyledTableCell align="right">Fuel&nbsp;(gal)</StyledTableCell>
                        <StyledTableCell align="right">Electricity&nbsp;(gal)</StyledTableCell>
                        <StyledTableCell align="right">Travelling&nbsp;(gal)</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <StyledTableRow key={row.index}>
                          <StyledTableCell component="th" scope="row">
                            {row.index}
                          </StyledTableCell>
                          <StyledTableCell align="right">{row.fuel}</StyledTableCell>
                          <StyledTableCell align="right">{row.electricity}</StyledTableCell>
                          <StyledTableCell align="right">{row.travel}</StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </form>
            </div>
          </div>
        </div>
      </div>
      </Wrapper>
    </>
  );
};

export default Fuel;


const Wrapper = styles.section`
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
