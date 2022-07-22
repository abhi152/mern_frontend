import React, { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import { useEffect } from "react";
import Navbar from "./Navbar";


 const Showall=() =>{
  const [row,setrow ]=useState([])


  useEffect(()=>{

 
    axios.get("https://react-crude-abhi.herokuapp.com/showall").then((res)=>{
      setrow(res.data)
      
    }).catch((res)=>{
      console.log(res)
    })
  },[0]);
  
  
    return(
      <div>

      
        <Navbar/>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              
              <TableCell align="right">Fname</TableCell>
              <TableCell align="right">Lname</TableCell>
              <TableCell align="right">Username</TableCell>
              <TableCell align="right">Password</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {row.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                
                <TableCell align="right">{row.fname}</TableCell>
                <TableCell align="right">{row.lname}</TableCell>
                <TableCell align="right">{row.username}</TableCell>
                <TableCell align="right">{row.password}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    )
}
export default Showall