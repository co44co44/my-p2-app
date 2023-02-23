
import React, { useEffect, useState } from 'react';
import ProgramItem from "./ProgramItem";
import OnsiteCourseItem from "./OnsiteCourseItem.js"

function Home() {
  // const [course, setCourse] = useState([]);
  const [online, setOnline] = useState([]);
  const [onsite, setOnsite] = useState([]);

  useEffect (() => {
    fetch("http://localhost:3000/online")
      .then (r => r.json())
      .then (data => setOnline(data))
      
}, [])

  useEffect (() => {
    fetch("http://localhost:3000/onsite")
      .then (r => r.json())
      .then (data => setOnsite(data))
    
}, [])

const onlineCourses = online.map((online) => (
  
  <ProgramItem
    online = {online}
  />
));    
const onsiteCourses = onsite.map((onsite) => (
  
  <OnsiteCourseItem
    onsite = {onsite}
  />
));    
    console.log ("helloooo")
    
  return (
    <div>
      <div id= "program-list"> 
      <h2> Online Courses: </h2> {onlineCourses} 
      <h2> Onsite Courses: </h2> {onsiteCourses}
       </div>
    </div>
  )
}

export default Home;