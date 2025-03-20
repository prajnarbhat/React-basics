// Creating multiple state hooks

import React, { useState } from "react";

function App4() {

    const [brand, setBrand] = useState({
        name: "abc",
        age: 20,
        city: "Sagra"
    })
    // To changes the state of the object
    // Create another same object that is the copy of the object and manipulate the property

    function changeState() {
        const copyBrand = {...brand}
        console.log("Copy of Object:", copyBrand)
        setBrand(copyBrand => {
            return {copyBrand, name: "xyz"};
        }) 
    }
    return (
        <>
         <h3> Using multiple useState </h3>
         <p> Name is {brand.name} and its age is {brand.age} </p>
         <button type="button" onClick={changeState}> Click Me! </button>
        </>
    )
}

export default App4;

// const obj = {
//     a: "1",
//     b: "2"
// };

// const copyObj = { ...obj , a: "10", c: "20"}
// console.log("Spread operator:", copyObj);