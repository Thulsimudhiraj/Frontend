// import React from "react"
// import ClassBasedParent from "./ClassBasedParent"

// class ClassBasedComponent extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             count:0,
//         }
//     }
//     increment(){
//         this.setState({count:this.state.count+1})
//     }
//     render(){
//         return(
//             <div>
//                <h1>hello my first react class component {this.state.count}</h1>
//                <button onClick={()=>this.increment()}>Increment</button>
//                <ClassBasedParent age={20}/>
//             </div>
//         )
//     }
// }
// export default ClassBasedComponent

//to maintain data we have state
//state is a obj in react that ontains actual data.
//we can mutate or change the state as well.
//whenever we change the state,react re-renders every time.
//this.state.count-displays data on ui.
//count is a var of state obj.
