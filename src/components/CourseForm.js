import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'

function CourseForm({addCourses}){

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [age, setAge] = useState("")
    const [phone, setPhone] = useState("")
    const [instructor, setInstructor] = useState("")
    const [modal, setModal] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        const newCourse =  {
                id,
                name,
                image,
                age,
                phone,
                instructor,
                modal
        }
        fetch("http://localhost:3000/courses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCourse)
         })
            .then(r => r.json())
            .then((course) => addCourses(course))      
            }


            function addAge(event){
                setAge(event.target.value)
            } 

            function addModal(event){
                setModal(event.target.value)
            }  

        return (
            <div id = "form"className = "course">
                <Container>
                    <h1>Do you run a Coding Club? offer it here!</h1>
                <form onSubmit = {handleSubmit}>
                    <h2 style={{color: "white" , background: "black" }}>
                    <label > Course Name: </label>
                        <input type="text" 
                            id="name" 
                            value={name} 
                            onChange={e => setName(e.target.value)} />
                        
                        <label style ={{display: "block"}}>
                            Age group: 
                        <select
                            name= "age"
                            value= { age }
                            onChange={addAge}>
                                <option value="">select...</option>
                                <option value="preschool">Preschool</option>
                                <option value="elementary">Elementary</option>
                                <option value="middleSchool">Middle School</option>
                                <option value="highSchool">High School</option>
                            </select>
                        </label>
                        
                        
                        <label>Contact info:</label>
                        <input type="text" id="contact" value={phone} onChange={e => setPhone(e.target.value)} />

                        <label >Instructor/Company:</label>
                        <input type="text" id="instructor" value={instructor} onChange={e => setInstructor(e.target.value)} />
                        
                        <label style ={{display: "block"}}>
                            Online/Offline:
                        <select
                            name= "modal"
                            value= { modal }
                            onChange={addModal}>
                                <option value="">select...</option>
                                <option value="online">Online</option>
                                <option value="onsite">Onsite</option>
                            </select>
                        </label>
                        <label htmlFor="image">Image URL:</label>
                        <input type = "text" id="image" value= {image} onChange = {e => setImage(e.target.value)} />

                        <button style={{background: "orange" }} type="submit">SUBMIT YOUR COURSE!</button>
                    </h2> 
                </form>
                </Container>
            </div>
        )
}   
export default CourseForm;
