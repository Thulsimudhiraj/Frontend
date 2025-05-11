// import {useState} from "react"

// function FunctionalBasedComponent(){
//     const [count,setCount]=useState(0)
//     const [age,setAge]=useState(0)
    
//     function increment(){
//         setCount(count+1)
//     }
//     function handleAge(e){
//         setAge(e.target.value)
//     }
//     return(
//         <div>
//             <h1>I am from Function based component {count}</h1>
//             <button onClick={()=>increment()}>Increment</button>
//             <input type="text" value={age} onChange={(e)=>handleAge(e)}/>
//             <h3>Age: {age}</h3>
//         </div>
//     )
// }
// export default FunctionalBasedComponent

//no need to use render method,body itself renders
//if we want to use state or local data ,use usestate hook.
//we if want to write a fun inside a fun,we should use fun keyword for both

