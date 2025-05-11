//In react,life cycle of a component represents the different stage of the component
//-during it's existence.
//react provides callback function to attach functionality in each and every stages of the React life cycle.
//Each React component has 3 distinct changes.
//Mounting, Updating, Unmounting.
//Mountng-putting html elements in dom through components
//updating:changing state or props.
//render:display elements on webpage.

//Mounting:constructor,getderivedstatefromprops,render,componentdidmout
//update:getderivedstatefromprops,shouldcomponentupdate,render,getsnapchatbeforeupdate,componentdidupdate

import React from "react"
import Child from "./Child"

class Parent extends React.Component{
    constructor(){//initialize local state
        console.log("I am in parent constructor")
        super()
        this.state={
            count:0,
            show:true
        }

    }
    static getDerivedStateFromProps(props,state){//intialize state from props
        console.log("I am in parent getDerivedStateFromProps")
        return{}
    }
    componentDidMount(){//used to api
        console.log("Iam in parent component DidMount")
    }
    increment(){
        this.setState({count:this.state.count+1})
    }
    hide(){
        this.setState({show:!this.state.show})
    }
    render(){//render ui element on web page.
        console.log("Iam in parent render")
        let child ="";
        if(this.state.show){
            child= <Child count={this.state.count}/>
        }else{
            child= null
        }
        //or
        //let child = <Child count={this.state.count}></Child>
        return(
            <div>
              <h1>Hello iam in parent count: {this.state.count}</h1>
              <button onClick={()=>this.increment()} className="btn btn-success">Increment</button>
              <button onClick={()=>this.hide()} className="btn-btn-success">Hide Child</button>
              {/* {this.state.show && <Child count={this.state.count}/>} */}
              {child}
            </div>
           
        )
    }
}
export default Parent

// 1.intialize data through constructor
// 2.intialize state from props
// 3.render
// 4.responsibe to call the api


////mounting phase:

// I am in parent constructor
// Parent.js:26 I am in parent getDerivedStateFromProps
// Parent.js:36 Iam in parent render
// Child.js:8 I am in child constructor.
// Child.js:15 I am in child getDerivedStateFromProps
// Child.js:33 Iam in child rendor
// Child.js:23 I am in child componentDidMount
// Parent.js:30 Iam in parent component DidMount


////update phase: 

// Child.js:15 I am in child getDerivedStateFromProps
// Child.js:19 I am in child shouldcomponentupdate
// Child.js:33 Iam in child rendor
// Child.js:26 I am in getsnapshotbeforeupdate
// I am in child componentDidUpdate


//////update phase////////////

// I am in parent getDerivedStateFromProps
// Parent.js:36 Iam in parent render
// Child.js:15 {count: 1}
// Child.js:16 I am in child getDerivedStateFromProps
// Child.js:20 I am in child shouldcomponentupdate
// Child.js:36 Iam in child rendor
// Child.js:27 I am in getsnapshotbeforeupdate---gives previous value before update
// Child.js:28 {count: 0} {}
// Child.js:32 I am in child componentDidUpdate--gives value after update.
// Child.js:33  1


