import React, { useState } from "react"

function CourseForm({OnAddOnsiteCourse, OnAddOnlineCourse}){

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [age, setAge] = useState("")
    const [phone, setPhone] = useState("")
    const [instructor, setInstructor] = useState("")

    function handleSubmit(event) {

        event.preventDefault()
        const newCourse = {
            name,
            image,
            age,
            phone,
            instructor,
        }

        OnAddOnlineCourse(newCourse)
        OnAddOnsiteCourse(newCourse)
    }

    return (
        <div  className = "program">
            <form onSubmit = {handleSubmit} style={{background: "white" }}>
                <h2 style={{background: "rgb(233, 217, 232" }}>
                    <label>Class Name</label>
                    <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
                    <label>Age group:</label>
                    <input type="text" id="age" value={age} onChange={e => setAge(e.target.value)} />
                    <label htmlFor="image">Image</label>
                    <input type = "text" id="image" value= {image} onChange = {e => setImage(e.target.value)} />
                    <label>Contact:</label>
                    <input type="text" id="contact" value={phone} onChange={e => setPhone(e.target.value)} />
                    <label>Instructor:</label>
                    <input type="text" id="instructor" value={instructor} onChange={e => setInstructor(e.target.value)} />
                    <button type="submit">Add Course</button>
                </h2> 
            </form>
        </div>
    )
}   

export default CourseForm;