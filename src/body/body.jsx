// import React from "react";
// import './body.css';
// import { FaBars } from "react-icons/fa";
// import { FaSistrix } from "react-icons/fa";




//     function Body () {
//     return(
//         <div className="nav">
//            <a href="#" className="nav__brand">
//                 Shopio <a href="shopio" className="nav__brand-icon">
//                     <FaBars className="nav__brand-icon" />
           
//                 </a>
//                 </a>  
//                         <div className="nav__search-icon" >  
//                            <a href="#" className="nav__search"> Search Products & brands 
//                            <a href="#" className="nav__search-icon2">
//                             <FaSistrix className="nav__search-icon2" />
                          
//                            </a>
//                            </a>            
//                         </div>   
//             <u1 className="nav__menu">
//                 <li className="nav__item"><a href className="nav__link">Download App</a></li>
//                 <li className="nav__item"><a href className="nav__link">Signup/login</a></li>
//             </u1>

           
//         </div>
        
            
//     );
// }


// export default Body;

import React from "react";
import "./body.css";
import { FaBars, FaSistrix } from "react-icons/fa";

function Body() {
  return (
    <div className="nav">
      <a href="#" className="nav__brand">
        Shopio
        <a href="shopio" className="nav__brand-icon">
          <FaBars className="nav__brand-icon" />
        </a>
      </a>
      <div className="nav__search-icon">
        <a href="#" className="nav__search">
          Search Products & brands
          <a href="#" className="nav__search-icon2">
            <FaSistrix className="nav__search-icon2" />
          </a>
        </a>
      </div>
      <ul className="nav__menu">
        <li className="nav__item">
          <a href="#" className="nav__link">
            Download App
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Signup/login
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Body;
