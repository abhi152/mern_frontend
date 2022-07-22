import React, { useEffect } from "react";

import { useState } from "react";

import Navbar from "./Navbar";










const Findprofile = () => {
    const [wheather,setstate]=useState([])
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f358421a40msh62118baf2ed890fp1dee10jsna5bb3ecbd773',
            'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
        }
    };
    useEffect(()=>{
        fetch('https://community-open-weather-map.p.rapidapi.com/weather?q=Mumbai', options)
        .then(response => response.json())
        .then((res)=>{
            console.log(res.main)
            
            setstate(res)
        })
        .catch(err => console.error(err));
    },[0])
    

    return(

        <div>
            <Navbar/>
            <div>
            {JSON.stringify(wheather)}
        </div>
        </div>
      
    )
}
export default Findprofile