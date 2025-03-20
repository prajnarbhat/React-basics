import React from "react";
// First import data

function Onclickevent() {
    function changeState() {
        alert("Hello");
    }
    return (
        <>
            <p> Handling Click Events </p>
            <button type="button" onClick={changeState}> Click Me </button>
        </>
    );
};

export default Onclickevent;

