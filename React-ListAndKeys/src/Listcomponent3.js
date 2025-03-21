import React from "react";

function List(props) {
    console.log("Props in list:", props) // { item: 1}
    // It returns an individual object from array of numbers {item: 1} {item: 2} {item: 3}
    return <li> {props.item} </li>
}

function Listcomponent3(props) {
    console.log("Component3 props:", props)
    // Return an array num: Array(4)}num: (4) [1, 2, 3, 4][[Prototype]]: Object
    const arrayOfnum = props.num;
    const listItem = arrayOfnum.map(item => 
        // key should be places inside array loop 
        // It should be a string
        <List item = {item} key = {item.toString()}/>
    )
    return (
        <ul> {listItem} </ul>
    )

}

export default Listcomponent3;

// Each child in a list should have a unique "key" prop
//  you should keep the key on the <List /> elements in the array rather than on the <li> element in the List itself.