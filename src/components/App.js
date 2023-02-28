
import React, { Route, Switch, useState, useEffect } from "react"
import Home from "./Home"
import NavBar from "./NavBar"
import ShareCourses from "./ShareCourses"
import CourseFinder from './CourseFinder'
import CourseItem from './CourseItem';
// import CourseForm from './CourseForm'



function App () {
  const [courses, setCourses] = useState([]);


    useEffect (() => {
      fetch("http://localhost:3000/courses")
        .then (r => r.json())
        .then (data => setCourses(data))
        
  }, [])

  const allCourses = courses.map((courses) => (
    
    <CourseItem
    courses = {courses}
    />

  ));    
  
    console.log(courses)
 

    function addCourses(courseObj){
      setCourses([...courses, courseObj])
    }

  console.log("coursefinder runs")
  

  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path= "/courses">
          <CourseFinder OnAddCourse= {addCourses}/>
        </Route>
        <Route exact path= "/courses/new">
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

// function App () {
    

//   return (
//     <div>
//       <NavBar/>
//       <Switch>
//         <Route exact path= "/courses">
//           <CourseFinder />
//         </Route>
//         <Route exact path= "/courses/new">
//           <ShareCourses/>
//         </Route>
//         <Route exact path= "/">
//           <Home />
//         </Route>
//       </Switch>
      
//     </div>
//   )
// }

// export default App;