import CourseItem from './CourseItem';


function CourseFinder ({courses}){
  
  const allCourses = courses.map((course) => (
    <CourseItem key={course.id} course = {course}/>
  ));    

  console.log("coursefinder runs")

    return (

        <div id ="courses" style={{background: "black" }}>
          
          <h2 style={{ color: "white", background: "purple" }}> 
          Courses: 
          </h2> {allCourses} 
        </div>
    )
}

export default CourseFinder

