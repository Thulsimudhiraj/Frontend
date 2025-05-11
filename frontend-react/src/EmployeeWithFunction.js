import {useState} from "react"

function EmployeeWithFunction(props){
    const[address,setAddress]=useState("nlg")
    const[name,setName]=useState("thulsi")
    return(
        <div>
            <h1>Hello from Employee Functional Component {props.company} {address}</h1>
            <h4>My name is {name}</h4>

        </div>
    )
}
export default EmployeeWithFunction


// in functional based component if we want to maintain the state load useState hook 
// from the react library.EmployeeWithFunction
// through useState we can maintain the local state.
// useState is a fun returns 2 things,current value or current state and fun to update that value or data.
//address,name are the properties for this company.
//if we want to maintain local state in classbased,use state variable
//it we want to maintain local state in funbased,we have to deal with usestate hook
