import { useEffect,useState} from "react"

function UseEffectHookDemo(){
    const[name,setName]=useState("")
    const[age,setAge]=useState(0)
    const[post,setPost]=useState({id:"",title:"",userId:"",completed:""})


    async function getPost(){
        let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        let post = await data.json();
        setPost(post)
    }
    useEffect(() => {
        console.log("hello Iam use effect")
        getPost();
    },[name,age])

    const changeName= ()=>{
         setName("thulsi")
    }
    const changeAge= ()=>{
        setAge(23)
    }
    const handleAge = (e)=>{
        setAge(e.target.value)
    }

    return(
        <div>
            <h1>Demo of Use effect hook</h1>
            <h1>{name}</h1>
            <h1>Age : {age}</h1>
            <input type="text" placeholder="enter different age" value={age} onChange={(e)=>handleAge(e)}/>
            <button onClick={changeName}>Change Name</button>

            {/* <button onClick={changeAge}>Change Age</button> */}

            <table className="table table-primary">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>userId</th>
                        <th>title</th>
                        <th>completed</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{post.id}</td>
                        <td>{post.userId}</td>
                        <td>{post.title}</td>
                        <td>{post.completed ? "true" : "false"}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default UseEffectHookDemo


// UseEffect hook allows you to perform side effects in ur components
//used to call a fun,api,n/w call,useEffect gets called once dom loaded inside webpage. 
//once it return all html,useeffect gets called.

// examples of side effect are fetching the data,directly updating the DOM,and timers


// it accepts 2 arguments,second one is optional.
// UseEffect(<function>,<dependancy>)

////////// 1.No dependancy passed//////////////

// UseEffect(()=>{
//   runs on every render
// })

////////// 2.An Empty Array//////////////////////

// UseEffect(()=>{
//   runs on only first render
//   
// },[])


///////// 3.Props or state value////////////////

// UseEffect(()=>{
//   runs on only first render
//   and anytime any dependancy value changes
// },[prop,state])

//1.use effect is called again and again whenever we change the state--without any array syntax
//2.if we use blank array,it will not call for every render--empty dependancy array
//3.empty dependancy array with props,states

//data comes from api not from local
//fetch is used to make a upi call through url-assume it's a backend url
//though this url,we will get the data.
//it returns promise,we will resolve the promise with then
