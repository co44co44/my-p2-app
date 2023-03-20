import React from 'react'

function Filter({filterBy, onChangeFilter}) {

  function handleFilterChange(event) {
        onChangeFilter(event.target.value);
  }
    
  return (
    <div className="Filter">
        <h2 style={{ color: "pink", fontweight: "bold",background: "black" }}> 
          Choose from the best ONLINE and ONSITE courses!:
        </h2>
      <select  onChange={handleFilterChange}
        value ={filterBy}>
          <option value="All">all courses</option>
          <option value="online">Online</option>
          <option value="onsite">Onsite</option>
         </select>   
      </div>
  )
}
export default Filter;	