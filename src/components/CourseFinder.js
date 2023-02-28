
import React, { useEffect, useState } from 'react';
import CourseItem from './CourseItem';
// import ShareCourses from './ShareCourses.js';
import CourseForm from './CourseForm.js';

function CourseFinder (){
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
        <div style={{background: "rgb(233, 217, 232" }}>
          <h2> Teachers! Publish your Coding Course here:</h2> 
           <CourseForm OnAddCourse= {addCourses} 
          />
        </div>
        <div  id= "course-list"> 
        <h2 style={{ color: "white", background: "purple" }}> Courses: </h2> {allCourses} 
        </div>

      </div>
    )


}

export default CourseFinder
