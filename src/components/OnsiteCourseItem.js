import React from 'react';
import CourseFinder from './CourseFinder';
// name, image, age, phone, instructor
function OnsiteCourseItem({ onsite } ) {
  console.log (onsite)

  return (

<div id="card" className= "program">

      <h3> {onsite.name} </h3>
      <img src={onsite.image} id="coursepic" alt={onsite.image}></img>
      <h3>Age group: {onsite.age}</h3>
      <h3>Contact: {onsite.phone}</h3>
      <h3>Instructor: {onsite.instructor}</h3>
      {/* <CourseFinder OnsiteCourse = {onsite} /> */}
    </div>



    // <div id="card" className= "program">
    //   <h3> {name} </h3>
    //   <img src={image} id="coursepic" alt={image}></img>
    //   <h3>Age group: {age}</h3>
    //   <h3>Contact: {phone}</h3>
    //   <h3>Instructor: {instructor}</h3>
    // </div>
  )
}

export default OnsiteCourseItem;
