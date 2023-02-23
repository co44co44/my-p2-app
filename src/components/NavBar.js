import React from 'react'
import { NavLink } from "react-router-dom"

function NavBar() {
  return (
      <nav>
        <NavLink to= "/"> Home </NavLink>
        <NavLink to="/onlineprogram">Online Courses</NavLink>
        <NavLink to="/onsiteprogram">On-site Courses</NavLink>
        <NavLink to="/shareyourproject">Teachers: Publish here your Coding Course! </NavLink>
    </nav>
  )
}

export default NavBar;