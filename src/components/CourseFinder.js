import CourseItem from './CourseItem';


function CourseFinder ({courses, onDeleteCourse}){
  
  const allCourses = courses.map((course) => (
    <CourseItem key={course.id} course = {course} onDeleteCourse={onDeleteCourse}/>
  ));    

  

    return (

        <div id ="courses" style={{background: "black" }}>
          
          <h2 style={{ color: "white", background: "purple" }}> 
          Courses: 
          </h2> {allCourses} 
        </div>
    )
}

export default CourseFinder

