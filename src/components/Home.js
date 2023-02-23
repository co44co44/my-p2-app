
import React, { useEffect, useState } from 'react';
import ProgramItem from "./ProgramItem";

function Home() {
  const [online, setOnline] = useState([]);

  useEffect (() => {
    fetch("http://localhost:3000/online")
      .then (r => r.json())
      .then (data => setOnline(data))

}, [])

const onlineItems = online.map((online) => (
  <ProgramItem
   
    name = {online.name}
    image = {online.image}
    likes = {online.likes}
    />
));   


    console.log ("helloooo")

  return (
    <div>
      
      <div id= "program-list"> 
      <h2>Online Courses:</h2>

      {onlineItems}
      </div>
    </div>
  )
}

export default Home;