
import React, { useEffect, useState } from 'react';
import ProgramItem from "./ProgramItem";

 function OnlineProgram() {
  const [online, setOnline] = useState([]);

  useEffect (() => {
      fetch("http://localhost:3000/online")
        .then (r => r.json())
        .then (data => setOnline(data))

  }, [])

  const onlineItems = online.map((online) => (
      <ProgramItem
        key ={online.id}
        name = {online.name}
        image = {online.image}
        likes = {online.likes}
        />
  ));
  

  return (
    <div id= "online">
      <h2>Join our Online Program!</h2>
      <div id= "program-list"> {onlineItems}</div>
    </div>
  );
}

export default OnlineProgram;