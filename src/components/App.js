import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom"
import Home from "./Home"
import NavBar from "./NavBar"
import CourseFinder from './CourseFinder'
import CourseForm from './CourseForm'


function App () {
  const [courses, setCourses] = useState([]);

    useEffect (() => {
      fetch("http://localhost:3000/courses")
        .then (r => r.json())
        .then (data => setCourses(data))  
  }, [])

    function addCourses(courseObj){
        setCourses([...courses, courseObj])
      }

  return (
    
    <div>

      <NavBar/>
      <Switch>
        <Route exact path= "/courses">
          <CourseFinder courses ={courses} />
        </Route>
        <Route exact path= "/courses/new">
          <CourseForm addCourses= {addCourses} />
        </Route>
        <Route exact path= "/">
          <Home />
        </Route>
      </Switch>
      
    </div>
  )
}
export default App;