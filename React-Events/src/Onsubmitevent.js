import React, { useState } from "react";
// First import data
// To change the input Text

function Onsubmitevent() {

    const [ text, setText ] = useState("")
    console.log("Text value:", text)

    const submitForm = (e) => {
        e.preventDefault()
        console.log("Text is:", text)
        alert(text)
    }
    const changeText = (e) => {
        setText(e.target.value)
    } 
    return (
        <>
            <form onSubmit={submitForm}>
                <input type="text" onChange={ (e) => changeText(e) }/>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default Onsubmitevent;

// [objectobject]?




