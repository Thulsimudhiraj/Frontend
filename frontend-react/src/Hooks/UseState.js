import {useState} from "react"//used to maintain local state.

function UseState(props){
  const[count,setCount] = useState(0)//array destructing 
  const[name,setName] = useState("")
    //console.log(useState(0))//array with 2 elements//0 and fun

    function increment(){
        setCount(count+1)
    }   
    function decrement(){
        setCount(count-1)
    }   
    function handleChange(e){
        setName(e.target.value)
    }
    return(
        <div>
            <h1>Demo of useState Hook</h1>
            <button className="btn btn-primary" onClick={()=>increment()}>Increment</button>
            <button className="btn btn-danger" onClick={()=>decrement()}>Decrement</button>
            <div><h1>count: {count}</h1></div> 
            <h2>My name is {name}</h2>
            <input type="text" value={name} onChange={handleChange}/>
        </div>
    )
}
    
export default UseState