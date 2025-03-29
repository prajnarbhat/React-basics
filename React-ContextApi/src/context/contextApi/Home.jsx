import { useContext } from "react";
import { BioContext } from ".";

const Home = () =>{

    const {myName,age} = useContext(BioContext)
    return (
        <>
         <h3> This is home page and my name is {myName} and age is {age}</h3>
        </>
    )
}

export default Home;

// so get the data that is myName 
// use useContext
// pass the BioContext inside useContext