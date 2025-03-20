// Creating multiple state hooks

import React, { useState } from "react";

function App3() {

    const [brand, setBrand] = useState("abc");
    const [color, setColor] = useState("red");
    return (
        <>
         <h3> Using multiple useState </h3>
         <p> Band is {brand} and its color is {color} </p>
        </>
    )
}

export default App3;