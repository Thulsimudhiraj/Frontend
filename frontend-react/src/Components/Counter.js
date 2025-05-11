import React from "react"

class Counter extends React.Component{
    constructor(){
        super()
        this.state={
            count:0

        }
    }
    increment(){
        this.setState({count:this.state.count+1})//or
        //this.state.count=this.state.count+1////inc on console, not on ui,bcz we r not setting state
        console.log(this.state.count)
    }
    decrement(){
        this.setState({count:this.state.count-1})//or
        //this.state.count=this.state.count+1//inc on console, not on ui,bcz we r not setting state
        console.log(this.state.count)
    }
    render(){
        console.log("rendering")
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <h1>Counter Example</h1>
                <button onClick={()=>this.increment()} className="btn btn-danger">increment</button>
                <button onClick={()=>this.decrement()} className="btn btn-primary">decrement</button>
            </div>
        )
    }
}

export default Counter
//if we want to maintain local data ,we should initialize data,for this we need constructor
//super-calling the constructor of parent class.
//render fun will call whenever we change the state.
