///////////EVENT HANDLERS////////////

import React from "react";

class User extends React.Component{
    constructor(props){
        super(props)//initialise the parent constructor
        this.state={
            name:""

        }
        this.handleClick1=this.handleClick1.bind(this)
    }
    handleClick1(event){
      console.log("clicked1",event)
      this.setState({name:"test"})
    }
    handleClick2(event){
      console.log("clicked2",event)
      this.setState({name:"test"})
    }
    handleClick3(event){
      console.log("clicked3",event)
      this.setState({name:"test"})
    }
    handleClick4 = (event)=>{
      console.log("clicked4",event)
      this.setState({name:"test"})
    }
    render(){
        return(
            <div>
                <h1>hello I am user component {this.state.name}</h1>
                <button onClick={this.handleClick1}>Click1</button>
                <button onClick={this.handleClick2.bind(this)}>Click2</button>
                <button onClick={(e)=>this.handleClick3(e)}>Click3</button>
                <button onClick={this.handleClick4}>Click4</button>


            </div>
        )
    }
}
export default User


//we have three ways to handle the events.

// 1.we can bind inside constructor,we no need to pass the event.default it takes 1st parameter as event only
// 2.we can bind directly while calling the function,in this no need to bind again.we need to pass the event
//3.we write in the form of arrow function.we need to pass the event.
//4.we write same as 1st one,but we will not bind it,bcz we write it in the form of arrow function.
//in js we write handleclick(),but in react this.handleclick,which means we are not invoking
//we are making reference of a function.
