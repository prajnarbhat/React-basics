/*Render each student’s name inside a list.
If the student passed, show their name in green.
If the student failed, show their name in red.*/

/* {id: 1, name: 'Alice', passed: true}
{id: 2, name: 'Bob', passed: false}
{id: 3, name: 'Charlie', passed: true}*/

import React from "react";

function Problem6(props) {
    console.log(props);
    const arrayOfStudents = props.students;

    const listItems = (
        arrayOfStudents.map((student) => (
            <li key={student.id} style={{ color: student.passed === true ? "green" : "red"}}> {student.name} </li>
        ))
    )

    return (
        <>
            <ul> {listItems} </ul>
        </>
    )
}

export default Problem6;