//  Filters employees as the user types.
// Ignores case sensitivity.
// Shows "No results found" if no employees match.

import React, { useState } from "react";

function Problem8(props) {
    console.log(props);
    const arrayOfEmployees = props.employees;

    const [ searchTerm, setSearchTerm] = useState("")

    const handleSearch = (e) =>{
        setSearchTerm(e.target.value);
    }

    const filteredEmployees = arrayOfEmployees.filter((employee) => {
        return employee.toLowerCase().includes(searchTerm.toLowerCase());
    })
    console.log("Filtered data:", filteredEmployees);

    const listItems = (
        filteredEmployees.map((emp) => (
            <li> {emp} </li>
        ))
    )
    return (
        <>
            <h3> Search result </h3>
            <input type="text" value={searchTerm} onChange={(e) => handleSearch(e)}/>
            <ul>
                { filteredEmployees.length > 0 ? listItems : <ul> No result </ul>}
            </ul>
        </>
    )
}

export default Problem8;