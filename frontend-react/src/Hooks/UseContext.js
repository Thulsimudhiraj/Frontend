import {createContext,useContext} from "react"

const NameContext = createContext();

const name="hyd";

function Home(){
    const name = useContext(NameContext)
    return(
        <div>
            <h4>Home component {name}</h4>
            <AboutUs/> 
        </div>
    )
}

function AboutUs(){
    const name = useContext(NameContext)
    return(
        <div>About us component {name}
            <ContactUs/> 
        </div>
    ) 
}


function ContactUs(){
    const name = useContext(NameContext)
    return(
        <div>ContactUs us component My addres: {name}</div>
    ) 
}

function MenuItem(){
    return(
        <Home/>
    )
}

function ContextHookDemo(){
    return(
        <NameContext.Provider value={name}>
            <MenuItem/>
        </NameContext.Provider>
    )
}

export default ContextHookDemo

//context provides a way to pass data or state through the component tree,witout having to pass props
//down manually through each nested component.It is designed to share data that can be considered as 
//gobal data for a tree of react components