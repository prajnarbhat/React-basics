import React, { useState } from "react";

function Controlledinputs() {
    function handleSubmit(e) {
        e.preventDefault();
        console.log("Form submit")
        console.log(name,age)
    }

    const [name, setName] = useState("");
    const [age, setAge] = useState("")
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                <label htmlFor="age">Age</label>
                <input type="number" id="age" name="age" value={age} onChange={(e) => setAge(e.target.value)}/>
                <button type="submit">Send</button>
            </form>
        </>
    )
    
}

export default Controlledinputs;

// In forms value and onChange are very important
// value is the state value
// Initially we gave empty value




