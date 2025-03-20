import React from "react";
// First import data

function App1() {
    const changeState = (val) =>{
        console.log(val);
    }
    return (
        <>
            <p> Handling Click Events </p>
            <button type="button" onClick={() => changeState("hello")}> Click Me </button>
        </>
    );
};

export default App1;

// Passing arguments while calling the function
// We use arrow function () => function(parameters)
// <button onClick={changeState("Button Clicked")}>Click Me</button> => This will be executed as soons as componenet is rendered
//  () => changeState("String1") is an arrow function with parameters.


