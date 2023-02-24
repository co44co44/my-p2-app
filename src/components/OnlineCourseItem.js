import React from 'react';


function OnlineCourseItem({ online }){

  return(
<div id="card" className= "program">
      <h3> {online.name} </h3>
      <img src={online.image} id="coursepic" alt={online.image}></img>
      <h3>Age group: {online.age}</h3>
      <h3>Contact: {online.phone}</h3>
      <h3>Instructor: {online.instructor}</h3>

    </div>
  )
}

export default OnlineCourseItem;