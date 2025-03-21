//Task: Given an array of country names, render the list in ascending order.
// Add a button to reverse the order.

import React, { useState } from "react";

function Problem7(props) {
    console.log(props.countries); // ['India', 'USA', 'Germany', 'Japan', 'Australia']
    const arrayOfCountries = props.countries.sort();
    console.log("Sorted:", arrayOfCountries)

    const [ items, setItems] = useState([...arrayOfCountries])

    const handleReverseItem = (items) => {
        setItems([...items].reverse());
    }

    const listItems = (
        items.map((country) => (
            <li> {country} </li>
        ))
    )
    return (
        <>
            <ul>{listItems}</ul>
            <button type="button" onClick={() => {handleReverseItem(items)}}> ReverseList </button>
        </>
    )

}

export default Problem7;