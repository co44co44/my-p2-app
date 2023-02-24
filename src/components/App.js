
import React from 'react'
import { Route, Switch } from "react-router-dom"
import Home from "./Home"
import NavBar from "./NavBar"
import ShareCourses from "./ShareCourses"
import CourseFinder from './CourseFinder'


function App () {
  

  return (
    <div>
     
      <NavBar/>
      <Switch>
        <Route exact path= "/coursefinder">
          <CourseFinder />
        </Route>
        <Route exact path= "/sharecouses">
          <ShareCourses/>
        </Route>
        <Route exact path= "/">
          <Home />
        </Route>
      </Switch>
      
    </div>
  )
}

export default App;