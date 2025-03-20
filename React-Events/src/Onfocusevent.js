import React, { useState } from "react";


function Onfocusevent() {

    const [message, setMessage] = useState("");
    return (
        <>
            <h3> Reset data </h3>
            
            <input type="text" value={message} onFocus={() => setMessage("Changing Message")}/>
            <p> {message} </p>
        </>
    )
}

export default Onfocusevent;