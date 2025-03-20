import React, { useState } from "react";

/*If isLoggedIn is true, it renders <h3>Welcome, User!</h3>
If isLoggedIn is false, it renders nothing*/

function Logicalandoperator2() {

    const [ Login, setLogin] = useState(true)

    return (
        <>
         <h3> If login is true it should render something </h3>

         <button type="button" onClick={() => setLogin(!Login)}> { Login ? "Login" : "Logout"} </button>
         { Login && <h3> Welcome user </h3>}
        </>
    )

}

export default Logicalandoperator2;