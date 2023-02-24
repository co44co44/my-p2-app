
import React, { useEffect, useState } from 'react';
import OnsiteCourseItem from "./OnsiteCourseItem.js"
import OnlineCourseItem from './OnlineCourseItem';
import CourseForm from './CourseForm.js';

function CourseFinder (){
  const [online, setOnline] = useState([]);
  const [onsite, setOnsite] = useState([]);

  useEffect (() => {
    fetch("http://localhost:3000/online")
      .then (r => r.json())
      .then (data => setOnline(data))
      
}, [])

  useEffect (() => {
    fetch("http://localhost:3000/onsite")
      .then (r => r.json())
      .then (data => setOnsite(data))
    
}, [])

const onlineCourses = online.map((online) => (
  
  <OnlineCourseItem
    online = {online}
  />
));    
const onsiteCourses = onsite.map((onsite) => (
  
  <OnsiteCourseItem
    onsite = {onsite}
  />
));    
    console.log ("helloooo")
 

      function addCourseOnline(courseOnlineObj){
        setOnline([...online, courseOnlineObj])
      }

      function addCourseOnsite(courseOnsiteObj){
        setOnsite([...onsite, courseOnsiteObj])
      }

  return (
    
    <div>
      <div style={{background: "rgb(233, 217, 232" }}>
        <h2> Teachers! Publish your Coding Course here:</h2>
        <CourseForm 
          OnAddOnlineCourse= {addCourseOnline} 
          OnAddOnsiteCourse= {addCourseOnsite} 
        />
      </div>

      <div  id= "course-list"> 
      <h2 style={{ color: "white", background: "purple" }}> Online Courses: </h2> {onlineCourses} 
      
      <h2 style={{ color: "white", background: "purple" }}> Onsite Courses: </h2> {onsiteCourses}

       </div>
    </div>
  )


}
// function CourseFinder({ OnsiteCourse}) {


// console.log({OnsiteCourse} )

//   return (
//     <div>
//       <div id= "program-list"> 
//          <h2> Find a course for you. </h2>
//          {/* <h2> Online Courses: </h2> 
//            {OnlineCourses} 
//          <h2> Onsite Courses: </h2>  */}
//           {OnsiteCourse}
//     </div>
//   </div>
//   )
// }

export default CourseFinder
