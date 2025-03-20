import React, { useState } from "react";

function Ternaryoperator3() {

    const [ state, setState] = useState("");
    return (
        <>
          <h3> State changes </h3>
          <p> {state} </p>
          <button type="button" onClick={() => setState("admin")}>Admin</button>
          <button type="button" onClick={() => setState("user")}>User</button>
        </>
    )
}

export default Ternaryoperator3;