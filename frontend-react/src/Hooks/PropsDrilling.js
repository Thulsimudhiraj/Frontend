function Home(props){
    return(
        <div>
            <h4>Home component</h4>
            <AboutUs address={props.address} />
        </div>
    )
}
function AboutUs(props){
    return(
        <div>AboutUs component
            <ContactUs address={props.address}/>
        </div>
    )
}
function ContactUs(props){
    return(
        <div>ContactUs component My address: {props.address}</div>
    )
}
function MenuItem(){//parent item.
    return(
        <Home address="hyd"/>
    )
}
export default MenuItem

//complex,if we need to pass data,we have to pass props in every component.
//if we need 10 coomponents in our application in parent-child basis,
//we have to pass unnecessary propsthroughout the component.
//to overcome this problem,we use usecontext hook
//it's job is to provide global data.
//create data globally,from any component we can access it.
