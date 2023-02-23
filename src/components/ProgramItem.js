import React from 'react';


// name, image, age, phone, instructor
function ProgramItem({ online } ) {

  console.log (online)
 
  return (

    <div id="card" className= "program">
      <h3> {online.name} </h3>
      <img src={online.image} id="coursepic" alt={online.image}></img>
      <h3>Age group: {online.age}</h3>
      <h3>Contact: {online.phone}</h3>
      <h3>Instructor: {online.instructor}</h3>
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

export default ProgramItem;