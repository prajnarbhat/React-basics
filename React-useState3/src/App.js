import React, { useState } from "react";


function App() {
    const [ text, setText ] = useState(1);
    return (
        <>
            <h3> First program using useState </h3>
            <p> Text value is {text} </p>

        </>
    )
}
export default App;