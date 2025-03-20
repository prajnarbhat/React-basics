import React, { useState } from "react"


function Conditionalrenderingwithcomponents() {

    function PostitiveAdmin() {
        return <h3> Admin is loggedin </h3>
    }

    function NegativeAdmin() {
        return <h3> User is loggedin </h3>
    }

    const [isAdmin, setAdmin] = useState(true)
    return (
        <>
            <h4> Components changes </h4>
            <h4> Button toggles </h4>
            { isAdmin ? <PostitiveAdmin/> : <NegativeAdmin/> }
            <button type="button" onClick={() => setAdmin(!isAdmin)}> { isAdmin ? "Switch to user" : "Switch to admin" } </button>
        </>
    )

}

export default Conditionalrenderingwithcomponents;