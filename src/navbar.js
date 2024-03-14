import React, { useState } from 'react';
import { Link } from "react-router-dom";
import img from "./NBS-logo-1.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu open/close

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <div className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;     
        <img src={img}  height="50" width="50" alt="logo"/>
      </div>
      <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
        
        {/* <a href='#/home'>Home</a> */}
        <a href='#/createaccount'>Create Account</a>
        <a href="#/login">LogIn</a>
        <a href='#/deposit'>Deposit</a>
        <a href='#/withdraw'>Withdraw</a>
        
        <a href="#/alldata">AllData</a>
       
        
      </div>
      <div>
        
      </div>
    </div>
    </>
  );
}

export default Navbar;
