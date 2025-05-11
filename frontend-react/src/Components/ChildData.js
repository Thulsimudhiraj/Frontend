import React from "react"

class ChildData extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    onNameChange(e){
        console.log(e.target.value)
        this.setState({name:e.target.value})
    }
    save(){
        console.log("value after save is",this.state.name)
        this.props.receivedData(this.state.name)
    }
    render(){
        
        return(
            <div>
                <h1>I am in ChildData</h1>
                <input type="text" value={this.state.name} onChange={(e)=>this.onNameChange(e)}/>
                <button onClick={()=>this.save()}>Save</button>
            </div>
        )
    }

}
export default ChildData