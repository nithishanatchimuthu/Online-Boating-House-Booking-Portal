import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => { 
  return (
    <div className="headerr">
      <div className="headerr__left">
        <h1>
          Boat<span>Stay</span>
        </h1>
      </div>
      <div className="headerr__right">
        <Link to="/">
            Home</Link>

            <Link to="/viewboad" >          
            Viewboat
        </Link>
        <Link to="/book" >          
            BookMyTicket
          
        </Link>
        <Link to="/contactus">
            Contact Us
         
        </Link>
        <Link to="/reg" >
          
            Login/SignUp
        
        </Link>
      </div>
    </div>
  );
};

export default Navbar;