// Creating multiple state hooks

import React, { useState } from "react";

function Multiplestate() {

    const [brand, setBrand] = useState("abc");
    const [color, setColor] = useState("red");
    return (
        <>
         <h3> Using multiple useState </h3>
         <p> Band is {brand} and its color is {color} </p>
        </>
    )
}

export default Multiplestate;