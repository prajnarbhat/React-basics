import React, { useState } from "react";


function Setcount() {

    const [count, setCount] = useState(0);
    return (
        <>
            <h3> Reset data </h3>
            <p> {count} </p>
            <button type="button" onClick={() => setCount(count+1)}>Increment</button>
            <button type="button" onClick={() => setCount(0)}>Reset</button>
            <button type="button" onClick={() => setCount(count-1)}>Decrement</button>
        </>
    )
}

export default Setcount;