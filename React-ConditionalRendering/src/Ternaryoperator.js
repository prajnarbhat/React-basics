import React from "react";

function Positivegoal() {
    return <h1> Ball reached goal </h1>
}

function Negativegoal() {
    return <h1> Ball did not reached the goal </h1>
}

function Ternaryoperator(props)  {
    console.log(props);
    const isGoal = props.isGoal
    return (
        <>
            <h3> Ternary operator </h3>
            { isGoal ? <Positivegoal/> : <Negativegoal/> }
            <p>{ isGoal }</p>
        </>
    )

}

export default Ternaryoperator;