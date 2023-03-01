import React, { useState } from "react"

function CourseForm(){

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
            .then(data => {
                console.log(data.course)
            })
        }

        function addAge(event){
            setAge(event.target.value)
        } 

        function addModal(event){
            setModal(event.target.value)
        }  

    return (
        <div  className = "program">
            <form onSubmit = {handleSubmit} style={{background: "white" }}>
                <h2 style={{background: "rgb(233, 217, 232" }}>
                    <label>Course Name:</label>
                    <input type="text" 
                    id="name" 
                    value={name} 
                    onChange={e => setName(e.target.value)} />
                    
                    <label>
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
                    
                    <label htmlFor="image">Image URL:</label>
                    <input type = "text" id="image" value= {image} onChange = {e => setImage(e.target.value)} />
                    <label>Contact info:</label>
                    <input type="text" id="contact" value={phone} onChange={e => setPhone(e.target.value)} />
                    <label>Instructor/Company:</label>
                    <input type="text" id="instructor" value={instructor} onChange={e => setInstructor(e.target.value)} />
                    
                    <label>
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

                    <button type="submit">SUBMIT YOUR COURSE!</button>
                </h2> 
            </form>
        </div>
    )
}   
export default CourseForm;


// import React, { useState } from "react"

// function CourseForm({OnAddCourseSubmit}){

//     const [name, setName] = useState("")
//     const [image, setImage] = useState("")
//     const [age, setAge] = useState("")
//     const [phone, setPhone] = useState("")
//     const [instructor, setInstructor] = useState("")
//     const [modal, setModal] = useState("")

    

//     function addName(event){
//         setName(event.target.value)
//     }

//     function addImage(event){
//         setImage(event.target.value)
//     }
    
//     function addAge(event){
//         setAge(event.target.value)
//     }
    
//     function addPhone(event){
//         setPhone(event.target.value)
//     }

//     function addInstructor(event){
//         setInstructor(event.target.value)
//     }

//     function addModal(event){
//         setModal(event.target.value)
//     }

//     function handleSubmit(event) {

//         event.preventDefault()
        
//         const newCourse = {
//             name,
//             image,
//             age,
//             phone,
//             instructor,
//             modal,
//         }

//         OnAddCourseSubmit(newCourse)
        
//     }

    
//     return (
//             <form className = "NewCourse" onSubmit = {handleSubmit} style={{background: "white" }}>
//                 <h2 style={{background: "rgb(233, 217, 232" }}>

//                     <label>
//                     Course Name: 
//                     <input 
//                     type="text" 
//                     id="name" 
//                     value={name} 
//                     onChange={addName} />
//                     </label>


//                     <label>
//                     Age group:
//                         <select
//                         name= "age"
//                         value= { age }
//                         onChange={addAge}>
//                             <option value="preschool">Preschool</option>
//                             <option value="elementary">Elementary</option>
//                             <option value="middleSchool">Middle School</option>
//                             <option value="highSchool">High School</option>
//                         </select>
//                     </label>

//                     <label htmlFor="image">Image</label>
//                     <input type = "text" id="image" value= {image} onChange = {addImage} />
                    
//                     <label>Contact:</label>
//                     <input type="text" id="contact" value={phone} onChange={addPhone} />
                    
//                     <label>Instructor:</label>
//                     <input type="text" id="instructor" value={instructor} onChange={addInstructor} />
                    
//                     <label>Modal:</label>
//                     <input type="text" id="modal" value={instructor} onChange={addModal} />
                    
//                     <button type="submit">Find</button>
//                 </h2> 
//             </form>
//     )
// } 