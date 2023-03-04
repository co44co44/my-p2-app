import React from 'react'

function Filter({onCategoryChange}) {
  return (
    <div className="Filter">
        <select name="filter" 
        onChange={onCategoryChange}>
          <option value="All">select...</option>
          <option value="Online">Online</option>
          <option value="Onsite">Onsite</option>
        </select>
      </div>
  )
}
export default Filter;