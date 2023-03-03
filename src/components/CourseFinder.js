import React, { useEffect, useState } from 'react';
import CourseItem from './CourseItem';
import CourseForm from './CourseForm';


function CourseFinder (){
  const [courses, setCourses] = useState([]);
  // const [finder, setFinder] = useState('');


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

  //  const finderCourses= courses.filter((courses) => (course.

  //  )

  //  })


    function addCourses(courseObj){
      setCourses([...courses, courseObj])
    }

    <CourseForm
    addCourses = {addCourses}
    />

  console.log("coursefinder runs")

    return (

        <div id ="courses" style={{background: "rgb(233, 217, 232" }}>
          <h2> Choose from the best ONLINE and ONSITE courses!:</h2>
        <h2 
        style={{ color: "white", background: "purple" }}> Courses: 
        </h2> {allCourses} 
        </div>

     
    )

}
export default CourseFinder

