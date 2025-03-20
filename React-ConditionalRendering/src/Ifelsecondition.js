import React from "react";

function Positivegoal() {
    return <h1> Ball reached goal </h1>
}

function Negativegoal() {
    return <h1> Ball did not reached the goal </h1>
}

function Ifelsecondition(props) {
    console.log("Props is:", props);
    const isGoal = props.isGoal;
    if(isGoal) {
        return <Positivegoal/>
    }
    else {
        return <Negativegoal/>
    }
}

// If else will not be written inside Jsx or written in form of JSX

export default Ifelsecondition;