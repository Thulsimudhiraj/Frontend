//used to call the side effect function.
//through this fun we can talk outside of ur component.

import { useState, useEffect } from "react"

function EffectHookDemo() {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    // const [user,setUser]=useState({name:"",age:"",id:""})


    // useEffect(()=>{//calls on every render
    //     console.log("hello iam calling")
    // })

    function increment(){
        setCount(count+1)
    }
    function increment2(){
        setCount2(count2+1)
    }


    // useEffect(() => {//calls only on first render
    //     console.log("hello Iam calling")
    // },[])

    useEffect(() => {//calls on first render nd whenever we change the count value.
        console.log("hello Iam calling")
    },[count])

    // useEffect(()=>{//backedn server returns data
    //     fetch("http://localhost:5000/user").then(function(res){
    //         return res.json()
    //     }).then(function(data){
    //         console.log("hello data received from node server",data)
    //         setUser((prevState)=>({
    //             ...prevState,
    //             ...data
    //         }))
    //     })
    // },[])


    return (
        <div>
            <h1>2nd hook useEffect Hook Demo</h1>
            <h1>count1:{count}  count2:{count2}</h1>
            <button onClick={()=>increment()}>Increment</button>
            <button onClick={()=>increment2()}>Increment2</button>
            {/* <h1>User Info: Name:{user.name} Age:{user.age} Id:{user.id}</h1> */}
        </div>
    )
}

export default EffectHookDemo

//if we change the state,the react renders the ui,once ui gets re-render,useEffect calls again nd again.
//fetch is the tool to call api