
import React from 'react'
import { NavLink } from "react-router-dom"

function NavBar() {

  return (
<div>
    <h1 style={{ background: "white", color: "purple" }}> {` { CODING CLASSES FOR KIDS } `}
    </h1>
      <nav>
        <NavLink to= "/"> Home </NavLink>
        <NavLink to="/courses">Coding Courses Finder > </NavLink>
        <NavLink to="/courses/new">Teachers: Publish your Coding Course!> </NavLink>
    </nav>
</div>
  )
}

export default NavBar;