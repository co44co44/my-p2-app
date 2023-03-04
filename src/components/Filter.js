import React from 'react'

function Filter({onCourseChange}) {
  return (
    <div className="Filter">
        <select name="filter" 
        onChange={onCourseChange}>
          <option value="All">select...</option>
          <option value="Online">Online</option>
          <option value="Onsite">Onsite</option>
        </select>
      </div>
  )
}
export default Filter;