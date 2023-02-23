import React from 'react';

function OnlineCourseItem({ online }){

  return(
<div id="card" className= "program">
      <h3> {online.name} </h3>
      <img src={online.image} id="coursepic" alt={online.image}></img>
      <h3>Age group: {online.age}</h3>
      <h3>Contact: {online.phone}</h3>
      <h3>Instructor: {online.instructor}</h3>
    </div>
  )
}

// import ProgramItem from "./ProgramItem";

//  function OnlineProgram() {
//   const [online, setOnline] = useState([]);

  // useEffect (() => {
  //     fetch("http://localhost:3000/online")
  //       .then (r => r.json())
  //       .then (data => setOnline(data))

  // }, [])

  // const courses = online.map((online, onsite) => (
  //     <ProgramItem
  //     online = {online}
  //     onsite = {onsite}

        // name = {online.name}
        // image = {online.image}
        // age = {online.age}
        // phone = {online.phone}
        // instructor = {online.instructor}
        // nameOnsite = {onsite.name}
        // imageOnsite = {onsite.image}
        // ageOnsite = {onsite.age}
        // phoneOnsite = {onsite.phone}
        // instructorOnsite = {onsite.instructor}

  //       />
  // ));

  // return (
    // <div id= "online">
    //   <h2 style={{ color: "whitesmoke" }}>Online Courses:</h2>
    //   {/* <div id= "program-list"> {courses}</div> */}
    //   <div id= "program-list"> {courses}</div>
    // </div>
//   );
// }

// export default OnlineProgram;
export default OnlineCourseItem;