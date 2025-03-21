/* Render each task inside a <ul>.
Add a "Delete" button next to each task.
When the button is clicked, remove that task from the list.*/

import { useState } from "react";

function Problem4(props) {
    const arrayOfTasks = props.tasks;
    console.log(arrayOfTasks)
     const [ items, setItems] = useState(arrayOfTasks);
     console.log("items is:", items)

    const listItems = (
        items.map((item) => 
            <li key={item.id}> {item.task} </li>
        )
    )
    return (
        <>
            <ul>{listItems}</ul>
            <button type="button" onClick={() => setItems([])}> ClearAll </button>
        </>
    )
}

export default Problem4;