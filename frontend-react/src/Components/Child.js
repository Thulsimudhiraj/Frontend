//Life Cycle methods applies to Class Based Components only
//In fun based components we have hooks similar to lyf cycle methods.

 import React from "react"

 class Child extends React.Component{
    constructor(props){
        console.log("I am in child constructor.")
        super(props)
        this.state={

        }
    }
    static getDerivedStateFromProps(props){//takes the latest data from the props.
        console.log(props)
        console.log("I am in child getDerivedStateFromProps")
        return{}
    }
    shouldComponentUpdate(){//responsible for rerender or not,if we return false,re-render not call
        console.log("I am in child shouldcomponentupdate")
        return true;
    }
    componentDidMount(){
        console.log("I am in child componentDidMount")
    }
    getSnapshotBeforeUpdate(props,state){//takes the current value before update.helps to give before value
        console.log("I am in getsnapshotbeforeupdate")
        console.log(props,state)
        return props
    }
    componentDidUpdate(){//gives updated data
        console.log("I am in child componentDidUpdate")
        console.log("",this.props.count)
    }
    componentWillUnmount(){
        //prompt("your form is unsaved please complete it")
        console.log("I am unmounting")
    }
    render(){
        console.log("Iam in child rendor")
        return(
            <div><h1>Hello I am in Child count: {this.props.count}</h1></div>
        )
    }

  }
  
  export default Child