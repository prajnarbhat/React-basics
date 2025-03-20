import React from "react";
// First import data

// To check the event type

function Onclickeventwitheventtype() {
    const changeState = (val, event) =>{
        console.log(event.type);
    }
    return (
        <>
            <p> Handling Click Events </p>
            <button type="button" onClick={(event) => changeState("hello",event)}> Click Me </button>
        </>
    );
};

export default Onclickeventwitheventtype.js;

// onClick = { () => changeState(parameters)}
// It takes two parameters 1) one is message  2) Eventtype
// changeState("Hello", event) 
// same thing event is passed inside first bracket
// (event) => changeState("Hello",event)



