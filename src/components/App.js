import React from 'react'
import { Route, Switch } from "react-router-dom"
import Home from "./Home"
import NavBar from "./NavBar"
import CourseFinder from './CourseFinder'
import CourseForm from './CourseForm'


function App () {


  return (
    <div>

      <NavBar/>
      <Switch>
        <Route exact path= "/courses">
          <CourseFinder />
        </Route>
        <Route exact path= "/courses/new">
          <CourseForm/>
        </Route>
        <Route exact path= "/">
          <Home />
        </Route>
      </Switch>
      
    </div>
  )
}
export default App;
