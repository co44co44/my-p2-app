import React, { useState } from "react"

function CourseForm(){

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

        onAddCourse(newCourse)
    }

    return (
        <div className = "program">
            <form onSubmit = {handleSubmit}>
                <label>Name</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
            </form>
        </div>
    )
}   

export default CourseForm;