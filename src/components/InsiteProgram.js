
// import React, { useEffect, useState } from 'react';
// import ProgramItem from "./ProgramItem";

// function InsiteProgram() {
//   const [onsite, setOnsite] = useState([]);
//   console.log(onsite)

//   useEffect(() => {
//     fetch("http://localhost:3000/onsite")
//       .then((r) => r.json())
//       .then((data) => setOnsite(data));
//   }, []);

//   const onsiteItems = onsite.map((onsite) => (
//     <ProgramItem
//       key ={onsite.id}
//       name = {onsite.name}
//       image = {onsite.image}
//       likes = {onsite.likes}
//       />
// ));
//   return (
//     <div id= "onsite">
//       <h1>Coding for kids</h1>
//       <h2>CODING CLASSES FOR KIDS</h2>
//       <div id= "onsite-list"> {onsiteItems}</div>
//     </div>
//   );
// }


// export default InsiteProgram;