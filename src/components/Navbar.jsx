import React from "react";
import navlogo from '../images/logo.svg';
const Navbar = ()=>{
    return(
        <div className="nav">
            <nav>
                <img src={navlogo} alt=".." className="nav-logo"></img>
                <button className="nav-button">Login</button>           
            </nav>
        </div>
    );
}

export default Navbar;