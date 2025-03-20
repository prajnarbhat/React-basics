import React, { useState } from "react";
// First import data
// To change the input Text

function Onchangeevent() {

    const [ text, setText ] = useState("")

    const changeInputText =  (event) => setText(event.target.value)
    return (
        <>
            <p> Handling onchange Events </p>
            <input type="text" onChange={ (event) => changeInputText(event) }/>
            <p> Text is {text}</p>
        </>
    );
};

export default Onchangeevent;




