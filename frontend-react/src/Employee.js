import React from "react"

class Employee extends React.Component{//react.component is a parent class
    constructor(props){
        console.log(props)
        super(props)
        this.state={
            name:"thulsi",
            age:"23",
            salary:"30000",
            companyName:props.company,
            changeName:""
        }
        this.changeName=this.changeName.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }

    changeName(){
        console.log(this.state.name)
        this.setState({name:this.state.changeName})
        this.props.add();//invoking happening from child to parent
    }
    handleChange(event){
        this.setState({changeName:event.target.value})
    }
    render(){
        return(
            <div>
                <h1>Name of the employee: {this.state.name}</h1>
                <h1>Age of the employee: {this.state.age}</h1>
                <h1>Salary of the employee: {this.state.salary}</h1>
                <h1>Company of the employee: {this.state.companyName}</h1>
                <input type="text" value={this.state.changeName} onChange={this.handleChange}/>
                <button onClick={this.changeName}>change name</button>
            </div>
        )
    }

}
export default Employee

//state is a object that contains data(name,age,salary )


// state object is where you store property values that belongs to the Component.
// state object can access anywhere in the component by using the this.state.propertyname
// when the state object changes,the component re-renders.changing the state obj.
// to change value in a state,use this.setState()


//in class based component we struggle with this pointer.
//here this points to button
//but state is not a part of button,its a part of class 
//so it's showing error nd undefiend if we use this.
//to access state,we need to this fun somewhere
//bind-changing the model and updating on view.
//if we write with arrow fun no need to bind this.

//if we write like this,we no need to bind above.
//<button onClick={this.changeName.bind(this)}>change name</button>
//through props we can pass single var,obj,array,we can pass fun as well.