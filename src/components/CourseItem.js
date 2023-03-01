import React from 'react';


function CourseItem({ courses }){

  return(
<div id="card" className= "program">
      <h3> {courses.name} </h3>
      <img src={courses.image} id="coursepic" alt={courses.image}></img>
      <h3>Age group: {courses.age}</h3>
      <h3>Contact: {courses.phone}</h3>
      <h3>Instructor: {courses.instructor}</h3>
      <h3>Modal: {courses.modal}</h3>
    </div>
  )
}

export default CourseItem;


// import React from 'react';


// function CourseItem({ OnCourseFormSubmit }){
  
//   const courses= {OnCourseFormSubmit}
//   console.log(courses)
//     return(

//       <div id="card" className= "course">
//         <h3> {courses.name} </h3>
//         <img src={courses.image} id="coursepic" alt={courses.image}></img>
//         <h3>Age group: {courses.age}</h3>
//         <h3>Contact: {courses.phone}</h3>
//         <h3>Instructor: {courses.instructor}</h3>
//         <h3>Modal: {courses.modal}</h3>
//       </div>
//     )
//   }

// export default CourseItem;