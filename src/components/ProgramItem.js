import React from 'react';



function ProgramItem({name, image, likes} ) {

    
  return (
    <div id="card" className= "program">
      <h3> {name} </h3>
      <img src={image} id="coursepic" alt={image}></img>
      <p>{likes}</p>
    </div>
  )
}

export default ProgramItem;