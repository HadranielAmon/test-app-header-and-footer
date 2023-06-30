import React from "react";
import './body.css';
import { FaBars } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";



    function Body () {
    return(
        <div className="nav">
           <a href="#" className="nav__brand">
                Shopio <a href="shopio" className="nav__brand-icon">
                    <FaBars className="nav__brand-icon" />
                {/* <FontAwesomeIcon icon={faBars} />  */}
                </a>
                </a>  
                        <div className="nav__search-icon" >  
                           <a href="#" className="nav__search"> Search Products & brands 
                           <a href="#" className="nav__search-icon2">
                            <FaSistrix className="nav__search-icon2" />
                           {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                           </a>
                           </a>            
                        </div>   
            <u1 className="nav__menu">
                <li className="nav__item"><a href className="nav__link">Download App</a></li>
                <li className="nav__item"><a href className="nav__link">Signup/login</a></li>
            </u1>

           
        </div>
        
            
    );
}


export default Body;