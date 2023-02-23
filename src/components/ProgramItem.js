import React from 'react';



function ProgramItem({name, image, likes} ) {

    
  return (
    <div className= "program">
      <h3> {name} </h3>
      <img src={image} alt={image}></img>
      <p>{likes}</p>
    </div>
  )
}

export default ProgramItem;