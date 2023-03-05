import React from 'react'

function Filter({filterBy, onChangeFilter}) {

    function handleFilterChange(event) {
        onChangeFilter(event.target.value);
      }
    
        

  return (
    <div className="Filter">
      <select  onChange={handleFilterChange}
        value ={filterBy}>
          <option value="All">select...</option>
          <option value="online">Online</option>
          <option value="onsite">Onsite</option>
         </select>   
      </div>
  )
}
export default Filter;	