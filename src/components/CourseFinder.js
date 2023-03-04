
import CourseItem from './CourseItem';



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
          Choose from the best ONLINE and ONSITE courses!:
          </h2>
          <h2 
          style={{ color: "white", 
          background: "purple" }}> 
          Courses: 
          </h2> {allCourses} 
        </div>

     
    )

}
export default CourseFinder

