import React, { useEffect, useState } from 'react';
import CourseItem from './CourseItem';


function CourseFinder (){
  const [courses, setCourses] = useState([]);
  const [finder, setFinder] = useState('');


    useEffect (() => {
      fetch("http://localhost:3000/courses")
        .then (r => r.json())
        .then (data => setCourses(data))
        
  }, [])

  const allCourses = courses.map((courses) => (

    <CourseItem
    courses = {courses}
    />

  ));    

  //  const finderCourses= courses.filter((courses) => (course.

  //  )

  //  })


    // function addCourses(courseObj){
    //   setCourses([...courses, courseObj])
    // }

  console.log("coursefinder runs")

    return (

        <div id ="courses" style={{background: "rgb(233, 217, 232" }}>
        
          <h2> Choose from the best ONLINE and ONSITE courses!:</h2>

        <h2 
        style={{ color: "white", background: "purple" }}> Courses: 
        </h2> {allCourses} 
        </div>

     
    )

}
export default CourseFinder


// import React, { useState } from 'react';
// import CourseItem from './CourseItem';
// import CourseForm from './CourseForm.js';
// import Filter from './Filter.js';

// function CourseFinder ({OnAddCourseSubmit, courses} ){
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [search, setSearch] = useState("");

//   function handleCategoryChanges(event){
//     setSelectedCategory(event.target.value);
//   }
  
//   function handleSelectedSearch(event){
//     setSearch(event)
//   }

//   const coursesToDisplay = courses
  
//     .filter (
//     course => selectedCategory ==="All" || course.category === selectedCategory
//     )
//     .filter (
//     course => course.name.toLowerCase().includes(search.toLowerCase())
//     )
//       console.log("courseFinder runs")
 
//     return (
      
//       <div className= "CourseFinder" style={{background: "rgb(233, 217, 232" }}>
//          {/* <h2 style={{ color: "white", background: "purple" }}> Courses: </h2> {allCourses} */}
//           <CourseForm OnAddCourseSubmit= {OnAddCourseSubmit}/>
//           <Filter onSearch = {search} onCategoryChange = {handleCategoryChanges} onSearchChange={handleSelectedSearch} />    
//           <h2> Find the best Coding Club:</h2> 
//          <ul className = "Courses">
//             {coursesToDisplay.map((course) => (
//               <CourseItem 
//               key={course.id} 
//               name={course.name} 
//               image={course.image}
//               phone={course.phone} 
//               instructor={course.instructor} 
//               modal={course.modal} />
//               ))}
//           </ul> 
//         </div >
          
//     );
// }

// export default CourseFinder;
