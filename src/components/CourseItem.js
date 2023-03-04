import React from 'react';


function CourseItem({ name, image, age, phone, instructor, modal }){


  return(

    <div id="card" className= "course-item" style={{background: "white" }} >
      <h3 style={{color: "purple"}}> {name} </h3>
      <img src={image} id="coursepic" alt={image}></img>
      <span>Age group: {age}</span>
      <h3>Contact: {phone}</h3>
      <h3>Instructor: {instructor}</h3>
      <h3>Model of Instruction: {modal}</h3>
    </div>
    
  )
}

export default CourseItem;

