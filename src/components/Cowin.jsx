import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
const fun=(para)=>{

    return(

        
        <li>{para.state_id} {para.state_name}</li>
    )
}
const Cowin=()=>{

    const [data,setdata]=useState([])
    useEffect(()=>{
        axios.get("https://cdn-api.co-vin.in/api/v2/admin/location/states").then((res)=>{
            console.log(res)
            JSON.stringify(res)
            setdata(res.data.states)
        }).catch((err)=>{
            console.log(err)
        })
    },[0])
   
    
    return(
        <div>
            <Navbar/>
        
        <div style={{"textAlign":"center","borderStyle":"solid","borderColor":"black" ,"width":"500px","margin":"50px"}}>
            
            <ul >
              {
                data.map(fun)
              }
            </ul>
           
          
        </div>
        </div>
    )
}
export default Cowin