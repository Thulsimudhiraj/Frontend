function User(props){//we receive data a props
    return(
        <div>
           <h1>Hello Iam User Component {props.name}</h1>
           <p>type of element need to crate is {props.type}</p>
        </div>
    )
}
export default User
//props is used to pass the data from parent to child