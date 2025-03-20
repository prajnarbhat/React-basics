import React from "react";

function Logicalandoperator(props) {
    console.log(props.cars)
    return (
        <>
            <h2> Logical && opeartor </h2>
            <h4>{props.cars.length > 0 && 
                <h2> Cars length {props.cars.length} is greater than 0 </h2>
            } </h4>
        </>
    )
}


export default Logicalandoperator;