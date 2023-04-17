import React from 'react';


function CourseItem({ course, onDeleteCourse }){
  const {id} =course
  
  const handleDelete = () => {
    fetch( `http://localhost:3000/courses/${id}`, {
      method:"DELETE"

    })
          .then (r => r.json())
          .then (() => onDeleteCourse(id))  
  }

    return(

      <div id="card" className= "course-item" style={{background: "white" }} >
        <h3 style={{color: "purple"}}> {course.name} </h3>
        <img src={course.image} id="coursepic" alt={course.image}></img>
        <h3>Age group: {course.age}</h3>
        <h3>Contact: {course.phone}</h3>
        <h3>Instructor: {course.instructor}</h3>
        <h3>Model of Instruction: {course.modal}</h3>
        <button id = "button" className= 'delete' onClick={handleDelete}>X</button>
      </div>
      
    )
  }

  export default CourseItem;

