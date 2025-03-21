/*Render each task inside a <ul>.
Add a "Delete" button next to each task.*/
// Delete task with id=2

import { useState } from "react";

function Problem5(props) {
    const arrayOfTasks = props.tasks;
    console.log(arrayOfTasks)
     const [ items, setItems] = useState(arrayOfTasks);
     console.log("items is:", items)

    const listItems = (
        items.map((item) => 
            <li key={item.id}> {item.task} </li>
        )
    )

    const deleteTask = (index) => {
        // filter out items whose id !=2
        const filterItems = items.filter((item,index) => {
            return item.id !== 2;
        })
        console.log("Filtered array:", filterItems);
        setItems(filterItems)
    }
    return (
        <>
            <ul>{listItems}</ul>
            <button type="button" onClick={() => deleteTask(2)}>ClearAll</button>
        </>
    )
}

export default Problem5;