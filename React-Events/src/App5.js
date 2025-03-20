import React from "react";
// First import data

function App5() {
    return (
        <>
            <p> Handling onchange Events </p>
            <input type="text" onChange={ (event) => console.log(event.target.value)}/>
        </>
    );
};

export default App5;




