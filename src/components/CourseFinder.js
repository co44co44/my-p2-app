import React, { useState } from "react";
import CourseItem from './CourseItem';
import Filter from './Filter';



function CourseFinder ({courses}){
  const [selectCourse, setSelectCourse] = useState("All");

  // const allCourses = courses.map((courses) => (
  //   <CourseItem courses = {courses}/>
  // ));    

  function handleCourseChange(e) {
    setSelectCourse(e.target.value);
  }

  const coursesToDisplay = courses.filter((course) => {
    if (selectCourse === "All") return true;
    return course.modal === selectCourse;
  });



  console.log("coursefinder runs")

    return (

        <div className="CourseFinder"
        id ="courses" 
        style={{background: "black" }}>
          <h2 
          style={{ color: "pink", fontweight: "bold", background: "black" }}> 
          Course Finder: 
          </h2>

          <h2 
          style={{ color: "white", 
          background: "purple" }}> 
          Courses: 
          </h2> 

          <Filter onCourseChange={handleCourseChange} />
         
          <ul className="Courses">
            {coursesToDisplay.map((course) => (
            <CourseItem key={course.id} name={course.name} image={course.image} age={course.age} phone={course.phone} instructor={course.instructor} modal={course.modal} />
          ))}
          </ul>

         

          {/* {allCourses}  */}
        </div>

     
    )

}
export default CourseFinder

