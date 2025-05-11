////passing data from child to parent.

import React from "react"
import ChildData from './ChildData'

class ParentData extends React.Component{
    constructor(){
        super()
        this.state={
            name:"thulsi"

        }
    }
    receivedData(data){
        console.log("value received from child is",data)
        this.setState({name:data})
    }
    render(){
        return(
            <div>
                <h1>I am in ParentData name is {this.state.name}</h1>
                <ChildData receivedData={(data)=>this.render(data)}/>
            </div>
        )
    }

}
export default ParentData