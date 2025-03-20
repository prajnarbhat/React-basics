// Mouse events

import React, { useState } from "react";
// First import data
// To change the input Text

function Onmouseoverevent() {
    function changeColor() {
        setColor("blue")
    }

    const [ color, setColor ] = useState("Red");
    return (
        <>
            <p style={{color}} onMouseOver={() => changeColor()} onMouseOut={() => setColor("black")}> Text inside paragraph tag </p>
        </>
    );
};

export default Onmouseoverevent;

// styles are represented in {{}} double bracket





