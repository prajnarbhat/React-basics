
function Listcomponent2(props) {
    console.log("Props:", props)
    // Object num: (4) [1, 2, 3, 4]
    console.log(props.num) //[1, 2, 3, 4]
    const arrayOfnum = props.num
    const listItem = arrayOfnum.map(item =>
        // Key should be unique string attribute added each item of list         
        <li key = {item.toString()}> {item} </li>
    );
    return (
        <ul> {listItem} </ul>
    );
}

export default Listcomponent2;

// Waning: Listcomponent2.js:10 Each child in a list should have a unique "key" prop.
// Key should be provided to list items
// when u move inside map and u will iterate through each list item
// Key is a special string attribute that should be included while creating a list of items
// If there are no stable ids use index as keys
// keys = {index}
// Key should be placed in the array
