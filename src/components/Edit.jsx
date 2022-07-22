import React from "react";

import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import axios from "axios"
import Navbar from "./Navbar";
var id
const Myform=(props)=>{
    return(

        <div>
           
            <div style={{margin:"auto",width:"100px","textAlign":"center"}} >
           First Name <input type="text" value={props.fname} onChange={props.onchangefname} />
           Last Name <input type="text" value={props.lname}  onChange={props.onchangelname} />
           Password <input type="text" value={props.password}  onChange={props.onchangepassword} />
           <button onClick={props.fun}>Update</button>
            
        </div>
        </div>
       
    )
}
const Edit = () => {
    const [query, setSearchQuery] = useState("");

    const [fname,setfname] = useState("");
    const [lname,setlname] = useState("");
    const [password,setpass] = useState("");
   
    const [email,setmail] = useState("");

    const[flag,setflag]=useState(0)
    function update(){
        console.log(fname)
        console.log(lname)
        console.log(password)
        console.log(id)
        console.log(email)
        
        const user={
            __id:id,
            fname:fname,
            lname:lname,
            password:password,
            email:email
        }
        axios.post("https://react-crude-abhi.herokuapp.com/update",user).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div>

<Navbar/>
        <div style={{"display":"flex" }}>

            <form action="">

                <input type="text" style={{"padding":"5px" ,"width":"500px" ,"marginLeft":"20px","fontFamily":"cursive","fontSize":"20px"}} name="serach" value={query}  onChange={(event)=>{
                    setSearchQuery(event.target.value)
                    setflag(0)

                }}/>
            </form>
            <IconButton type="submit" aria-label="search" onClick={()=>{
                console.log(query)
                
                    axios.post("https://react-crude-abhi.herokuapp.com/edit",{email:query}).then((res)=>{
                        console.log(res.data.data)
                        const obj=res.data.data
                        setfname(obj.fname)
                        setlname(obj.lname)
                        setpass(obj.password)
                       
                        id=obj._id
                        setmail(obj.username)
                        
                        setflag(1)
                    })
                    .catch((err)=>{
                        console.log(err.response.data)
                    })



              
                setSearchQuery("")
            }}>
            <SearchIcon style={{ fill: "blue" ,width:"20px" }}  />
            </IconButton>
                <br />
            
            
           
        </div>
        {
            flag===1 &&
            <Myform
            fname={fname}
            lname={lname}
            password={password}
            fun={update}
            onchangefname={(event)=>{
                setfname(event.target.value)
                
            }}
            onchangelname={(event)=>{
                setlname(event.target.value)
                
            }}
            onchangepassword={(event)=>{
                setpass(event.target.value)
                
            }}
            />

        }
       
        </div>
        

    )
}
export default Edit