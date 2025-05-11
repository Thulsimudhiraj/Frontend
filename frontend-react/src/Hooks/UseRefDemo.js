import {useRef,useEffect} from "react"
function UseRefDemo(){
    const inputRef = useRef("")

    useEffect(()=>{//without this curser not comes in text box.
        inputRef.current.focus();
    })

    const submit=(e)=>{
        console.log("ref value==",inputRef)
    }
    
    return(
        <div>
            <h1>demo of UseRef Hook</h1>
            <input type="text" ref={inputRef}/>
            <button onClick={submit}>Submit</button>
        </div>
    )
}
export default UseRefDemo

//it is useful when you persist the value on render.
//on every rendor this ref value does not change. 
//if we use state on every rendor the value will change.
//we are setting the focus of text box through useRef