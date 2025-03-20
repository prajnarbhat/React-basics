import React, { useState } from "react";

function Changingstate() {

    const [text, setText] = useState("Hello");

    function updateState(){
        setText("Ram");
    }
    return (
        <>
            <h3>  </h3>
            <p> {text} </p>
            <p> Create a button to change the state of the application </p>
            <button type="button" onClick={updateState}>Click Me!</button>
        </>
    )
}

export default Changingstate;