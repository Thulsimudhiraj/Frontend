import {useReducer, useState} from "react"

function CounterReducer(state,action){
    if(action.type==='increment'){
        return {count:state.count+1}
    }
    else if(action.type==='decrement'){
        return {count:state.count-1}
    }
    else{
        return "no function"
    }

}
const initialState={
    count:0
}

function useReducerHookDemo(){
    //const[count,setCount] = useState(0)
    const[state,dispatch] = useReducer(CounterReducer,initialState)

    const increment=()=>{
        dispatch({type:"increment"})
    }
    const decrement=()=>{
        dispatch({type:"decrement"})
    }

    return(
        <div>
            <h1>Count: {}</h1>
            <button className="btn btn-primary" onClick={()=>increment()}>Increment</button>
            <button className="btn btn-success" onClick={()=>decrement()}>Decrement</button>

        </div>
    )
}
export default useReducerHookDemo

//similar to usestate hook
//it allows for custom state logic
//used to manage complex state logic in react applications.
//its a gd alternative to redux in certain cases.

//const[state,dispatch] = useReducer(reducer,initialArg)

//flow of reducer

//ui   button   event   action  dispatch  reducer
//reducer returns new state and checks type of action,based on the type it perfoms action.
