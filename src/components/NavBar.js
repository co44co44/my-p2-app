
import React from 'react'
import { NavLink } from "react-router-dom"

function NavBar() {

  return (
<div>
    <h1 style={{ color: "white" }}> {` { CODING CLASSES FOR KIDS } `}
    </h1>
      <nav>
        <NavLink to= "/"> Home </NavLink>
        <NavLink to="/coursefinder">Coding Courses Finder ></NavLink>
        {/* <NavLink to="/onsiteprogram">On-site Courses</NavLink> */}
        <NavLink to="/sharecouses">Teachers: Publish your Coding Course!></NavLink>
    </nav>
</div>
  )
}

export default NavBar;