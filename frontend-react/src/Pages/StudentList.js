import {useState,useEffect} from "react"

function StudentList(){

    const [student,setStudent]=useState("")
    useEffect(()=>{
        let student = localStorage.getItem("student")
        if(student){
            let studentData= JSON.parse(student)
            const {name,age}=studentData
            setStudent((prev)=>({
               ...prev,
               name,
               age
            }))
        }
    },[])
    return(
        <div className="container">
            <h1>I am in studentListPage</h1>
            <div>
                <h1>Name: {student.name} Age: {student.age}</h1>
            </div>
        </div>
    )
}
export default StudentList