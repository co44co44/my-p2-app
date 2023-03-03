import React from 'react';


function CourseItem({ courses }){

  return(
<div id="card" className= "course-item" style={{background: "white" }}>
      <h3 style={{color: "purple"}}> {courses.name} </h3>
      <img src={courses.image} id="coursepic" alt={courses.image}></img>
      <h3>Age group: {courses.age}</h3>
      <h3>Contact: {courses.phone}</h3>
      <h3>Instructor: {courses.instructor}</h3>
      <h3>Modal: {courses.modal}</h3>
    </div>
  )
}

export default CourseItem;

