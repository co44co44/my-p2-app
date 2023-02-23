import { logDOM } from '@testing-library/react';
import React from 'react'
import { NavLink } from "react-router-dom"

function NavBar() {

  return (
<div>
    
    <h1 style={{ color: "whitesmoke" }}> {`< FIND THE BEST CODING PROGRAM FOR YOUR KIDS > `}
    <img id= "logo" src= "https://www.lifeintech.com/images/posts/kidscoding01.jpg">
    </img>
    </h1>
      <nav>
        <NavLink to= "/"> Home </NavLink>
        <NavLink to="/onlineprogram">Coding Courses Finder</NavLink>
        {/* <NavLink to="/onsiteprogram">On-site Courses</NavLink> */}
        <NavLink to="/shareyourproject">Teachers: Publish here your Coding Course! </NavLink>
    </nav>
</div>
  )
}

export default NavBar;