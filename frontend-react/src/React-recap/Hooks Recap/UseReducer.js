//used to manage or maintain the state-useState
//when we have complex state management,we use useReducer hook.

import { useState, useReducer } from "react"

function UseReducerRecap() {

    const initialState = {
        name: ""
    }

    function employeeReducer(state = initialState, action) {
        if (action.type === "add_employee") {
            return { name: action.data.name }
        }else if(action.type==="show_employee"){
            return {name:state.name,id:101,age:20}
        }
         else {
            return state;
        }
    }
    const [state, dispatch] = useReducer(employeeReducer, initialState)

    const handleChange = (e) => {
        dispatch({ type: "add_employee", data: { name: e.target.value } })
    }
    const show = (e) => {
        e.preventDefault()
        dispatch({ type: "show_employee" })
    }
    return (
        <div>
            <h1>useReducerRecap</h1>
            <form>
                <label>Name</label>
                <input type="text" value={state.name} onChange={(e) => handleChange(e)} />
                <h1>Name of employe: {state.name}</h1>
                <button onClick={(e)=>show(e)}>show employee</button>
                <h1>Name:{state.name} age:{state.age} id:{state.id}</h1>
            </form>
        </div>
    )
}
export default UseReducerRecap


//acton,reducer,dispatch

//action:add_employee
//reducer:function
//dispatch:is a method given by useReducerHook
//inside dispatch we will pass action like,nd we will pass data as a payload
////////////dispatch({action,"add_employee",payload:{name:thulsi,id:1}})
//the above call goes to reducer function,insdie reducer fun,it's checks what kind of action is coming