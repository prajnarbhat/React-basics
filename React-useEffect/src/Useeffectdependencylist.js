import React, { useEffect, useState } from "react";

// How second parameter in useEffect function is useful
// If there is no second parameter the useEffect function will execute for every re-render

function Useeffectdependencylist() {

    const [ count, setCount ] = useState(0)

    // useEffect(() => {
    //     console.log("Hello");
    // },[])
    // Here we passed the second parameter as [] empty array
    // This is called dependence array
    // Now useEffect will run only first time that is only initial render

    /*useEffect(() => {
        console.log("Hello");
    },[count])*/
    // here everytime we change the count value the useEffect will be executed
    // We can write multiple useEffect in one application

    // Conditional rendering
    useEffect(() => {
        if( count > 6) {
            console.log("Hello");
        }   
    },[count])
    // 1.This is conditional rerendering that useEffect will run only after count>6
    return (
        <>
            <p>{count}</p>
            <button type="button" onClick={() => setCount(count+1)}>Click me!</button>
        </>
    )
}

export default Useeffectdependencylist;