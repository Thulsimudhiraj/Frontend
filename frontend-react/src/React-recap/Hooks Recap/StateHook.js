import { useState } from "react"
function StateHook() {
    const [name, setName] = useState("Thulsi")
    const [employee, setEmployee] = useState({ name:"srinu", age:"24", salary:"25000" })
    
    function onNameChange(e){
        setEmployee({...employee,name:e.target.value})
    }
    function onAgeChange(e){
        setEmployee({...employee,age:e.target.value})
    }
    function handleEmpData(){
        setEmployee((prevState)=>({
              ...prevState,
              name:"srinu1",
              age:"25",
              saary:"26000"
        }))
    }
    return (
        <div>
            <h1>first hook demo useState {name}</h1>
            <h1>emp Info: {employee.name} {employee.age} {employee.salary}</h1>

            <input type="text" value={employee.name} onChange={(e)=>onNameChange(e)}/>
            <input type="text" value={employee.age} onChange={(e)=>onAgeChange(e)}/>
            <button onClick={()=>handleEmpData()}>change employeedata</button>
        </div>
    )
}

export default StateHook