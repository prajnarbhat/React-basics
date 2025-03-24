// 1.UseEffect is a hook
// 2.First need to be imported {useEffect}
// 3.useEffect is a function
 
// Core functionality: 4.It will by default after every re-render of the components

import React, { useEffect, useState } from "react";

function Useeffectbasics() {
    // 1.UseEffect is a function as a first parameter it will take another function
    // useEffect(()=> {} , second Parameter)
    // It will not be written inside JSX
    useEffect(() => {
        console.log("Hello");
    })
    // This function will run every time this component rendered

    const [ count, setCount] = useState(0)
    return (
        <>
            <p> {count} </p>
            <button type="button" onClick={() => setCount(count+1)}>Click me</button>
        </>
        // Every time button clicked the count value increases
        // Every time button clicked component re-render the useEffect will be executed

    )
}

export default Useeffectbasics;

/*Dependency Array - Determines when the effect runs:
Empty ([]) → Runs only once (on mount).
With dependencies → Runs when dependencies change.
Without dependencies → Runs on every render.*/