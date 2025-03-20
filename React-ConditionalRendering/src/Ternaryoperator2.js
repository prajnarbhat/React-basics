import React, { useState } from 'react';

/* If isLoggedIn is true, it shows "Welcome, User!"
If isLoggedIn is false, it shows "Please log in"
Button toggles between "Login" and "Logout" */



function Ternaryoperator2() {
    const [isLogin, setLogin] = useState(true)

    function changeState() {
        console.log("click")
        { isLogin ? setLogin(false) : setLogin(true)} 
    }
    return (
        <>
            <h3> Ternary operator</h3>
            <p> { isLogin ? "System is logged out" : "Login successfully" }</p>
            <button type="button" onClick={changeState}> { isLogin ? <p>Loggedin </p> : <p>Loggedout </p> } </button>
        </>
    )

}

export default Ternaryoperator2;