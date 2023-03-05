import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom"
import Home from "./Home"
import NavBar from "./NavBar"
import CourseFinder from './CourseFinder'
import CourseForm from './CourseForm'
import Filter from './Filter';


function App () {
  const [courses, setCourses] = useState([]);
  const [filterBy, setFilterBy] = useState("All")


    useEffect (() => {
      fetch("http://localhost:3000/courses")
        .then (r => r.json())
        .then (data => setCourses(data))  
  }, [])

  
    const filterByModel = courses.filter((course) =>
    course.modal === filterBy || filterBy ==="All"
    )

    function addCourses(courseObj){
        setCourses([...courses, courseObj])
      }

  return (
    
    <div>

      <NavBar/>
      <Switch>
        <Route exact path= "/courses">
          <Filter filterby={filterBy} onChangeFilter={setFilterBy}/>
          <CourseFinder courses ={filterByModel} />
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