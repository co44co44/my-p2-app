
import React from 'react'
import { Route, Switch } from "react-router-dom"
import Home from "./Home"
import NavBar from "./NavBar"
import ShareCourses from "./ShareCourses"
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

// import React, {useState, useEffect }  from "react";
// import { Route, Switch} from "react-router-dom";
// import Home from "./Home";
// import NavBar from "./NavBar";
// import ShareCourses from "./ShareCourses";
// import CourseFinder from "./CourseFinder";
// import CourseItem from "./CourseItem";



// function App () {
//   const [courses, setCourses] = useState([]);


//     useEffect (() => {
//       fetch("http://localhost:3000/courses")
//         .then (r => r.json())
//         .then (data => setCourses(data))
        
//   }, [])

//   const allCourses = courses.map((courseObj) => {
//     return (
//     <CourseItem courses = {courseObj}/>
//     )
//   }
//   );    

//     function addCourses(courseObj){
//       setCourses([...courses, courseObj])
//     }

//   console.log("app runs")
  

//   return (
//     <div>
//       <NavBar/>
//       <Switch>
//         <Route exact path= "/courses">
//           <CourseFinder  courses = {courses} />
//         </Route>
//         <Route exact path= "/courses/new">
//           <ShareCourses OnAddCourseSubmit= {addCourses}/>
//         </Route>
//         <Route exact path= "/">
//           <Home/>
//         </Route>
//         <Route path="*">
//           <h1>404 not found</h1>
//         </Route>
//       </Switch>
     
//     </div>
//   )
// }

// export default App;