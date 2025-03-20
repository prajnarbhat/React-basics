import React from "react";
// First import data

// To pass an argument to an event handler, use an arrow function.

function Onclickeventwithval() {
    const changeState = (val) =>{
        alert(val)
        // [object Object]  it is giving this as an output
        // Since we dint passed any value while calling the function it receives an event object
        // That event object is converted to string resulting in [object object]
        // So use arrow function to pass specific value to the function
    }
    return (
        <>
            <p> Handling Click Event by passing Argument to event handler </p>
            <button type="button" onClick={() => changeState("hello")}> Click Me </button>
        </>
    );
};

export default Onclickeventwithval;

// <button onClick={changeState("Button Clicked")}>Click Me</button>
// If we write it this way, changeState("Button Clicked") executes immediately when the component renders, instead of waiting for the button to be clicked.
// Here, () => changeState("Button Clicked") is an arrow function with no parameters.