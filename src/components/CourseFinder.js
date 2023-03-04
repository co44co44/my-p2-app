
import CourseItem from './CourseItem';
import Filter from './Filter';



function CourseFinder ({courses}){
  

  const allCourses = courses.map((courses) => (
    <CourseItem courses = {courses}/>
  ));    



  //  const finderCourses= courses.filter((courses) => (course.

  //  )

  //  })

  console.log("coursefinder runs")

    return (

        <div 
        id ="courses" 
        style={{background: "black" }}>
          
          <h2 
          style={{ color: "pink", fontweight: "bold",
          background: "black" }}> 
          Course Finder: 
          </h2>
          <Filter />
          <h2 
          style={{ color: "white", 
          background: "purple" }}> 
          Courses: 
          </h2> {allCourses} 
        </div>

     
    )

}
export default CourseFinder

