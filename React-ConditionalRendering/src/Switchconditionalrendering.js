import React, { useState } from "react";

function Switchconditionalrendering() {

    const [role, setRole] = useState("guest");

    const renderrole = () =>{
        switch(role) {
            case "admin":
                return <h3>"Welcome admin" </h3>        
            case "user":
                return <h3> "Welcome user"; </h3>            
            case "guest":
                return <h3> "Welcome guest"; </h3>         
            default:
                return <h3> "Welcome all" </h3>
        }
    }
    return (
        <>  
            <h1> {renderrole()} </h1>
            <h2> Consditional rendering using switch when there are multiple cases </h2>

            <button onClick = {() => setRole("admin")}> Adminn </button>
            <button onClick = {() => setRole("user")}> user </button>
            <button onClick = {() => setRole("guest")}> guest </button>
            
        </>
    )
}

export default Switchconditionalrendering;