import React from "react";
import './body.css';
// import { createGenerateClassName } from "@material-ui/core";


    function Body () {
    return(
        <nav className="nav">
           <a href="#" className="nav__brand">
                adom</a>

                
            <u1 className="nav__menu">
            <li className="nav__item"><a href="#" className="nav__link">Search producs/brands</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Download App</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Signup/login</a></li>
            </u1>

            <div className="nav__toggler">
                <div className="line 1"></div>
                <div className="line 2"></div>
            </div> 

           
        </nav>  
        
            
    );
}


export default Body;