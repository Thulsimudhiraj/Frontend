import {useState} from "react"//used to maintain local state.

function CounterF(props){
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
            <button className="btn btn-primary" onClick={()=>increment()}>Increment</button>
            <button className="btn btn-danger" onClick={()=>decrement()}>Decrement</button>
            <div><h1>count: {count}</h1></div> 
            <h2>My name is {name}</h2>
            <input type="text" value={name} onChange={handleChange}/>
        </div>
    )
}
    
export default CounterF

//usestate is a function that returns an array with 2 elements.
//1-current state value
//2-update the value or state.
//0 copied insdie count var and fun copied inside setCount fun
//count,name are local variables.

////useState()
// usestate hook is a function which is used to store state value in a functional Component
// it accepts an argument as the initial value of the state.
// it returns an array with 2 Elements 1-current value of state,2-fun to update the state,
// we import usestate first from react by 
// import {useState} from "react"
// later we use,
// const[currentStateValue,functionToUpdateState]=useState(initialStateValue)