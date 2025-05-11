//before react 16.8 version,class component is used to manage the state.
//there is no state concept in functional based component before 16.8 version.the job of fun based comp
//before 16.8 is displaying 
//after 16.8 version we can use state in fun based component using usestate hooks.

import React from "react";
class Company extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            companyAddress:"hyd"
        }

    }
    render(){
        return(
            <div>
               <h1>Hello from class based compnonet my company name is {this.props.company} {this.state.companyAddress}</h1>
            </div>
        )
    }
}
export default Company

// state is obj that contains component Data.
//for maintaing local data we need state
//we can mutate state data,but not props data.