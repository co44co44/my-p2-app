import React from 'react';



function ProgramItem({name, image, age, phone, instructor} ) {

    
  return (
    <div id="card" className= "program">
      <h3> {name} </h3>
      <img src={image} id="coursepic" alt={image}></img>
      <h3>Age group: {age}</h3>
      <h3>Contact: {phone}</h3>
      <h3>Instructor: {instructor}</h3>
    </div>
  )
}

export default ProgramItem;