
import React, { useEffect, useState } from 'react';
import ProgramItem from "./ProgramItem";

 function OnlineProgram() {
  const [online, setOnline] = useState([]);

  useEffect (() => {
      fetch("http://localhost:3000/online")
        .then (r => r.json())
        .then (data => setOnline(data))

  }, [])

  const onlineItems = online.map((online, onsite) => (
      <ProgramItem
        name = {online.name}
        image = {online.image}
        age = {online.age}
        phone = {online.phone}
        instructor = {online.instructor}
        nameOnsite = {onsite.name}
        imageOnsite = {onsite.image}
        ageOnsite = {onsite.age}
        phoneOnsite = {onsite.phone}
        instructorOnsite = {onsite.instructor}

        />
  ));

  return (
    <div id= "online">
      <h2>Kids Coding Course finder!</h2>
      <div id= "program-list"> {onlineItems}</div>
    </div>
  );
}

export default OnlineProgram;