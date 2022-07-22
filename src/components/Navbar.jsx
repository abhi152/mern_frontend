import React from "react"
import {Link} from "react-router-dom"


function Navbar(){
    return(
       <ul className="nav">
        <Link to ='/home'>Home</Link>
        
       
         <li><Link to ='/signup'>Signup</Link></li>
         <li><Link to ='/showall'>Show all Student</Link></li>
         <li><Link to ='/showprof'>Find Profile</Link></li>
         <li><Link to ='/editprof'>Edit Profile</Link></li>
         <li><Link to ='/cowinapi'>Cowin api</Link></li>
       </ul>
    );
}

export default Navbar;