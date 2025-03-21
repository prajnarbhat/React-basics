
// Use .map() to display each color inside an unordered list (<ul>).
function Problem1listofcolors(props) {
    console.log("Prop data:", props); //{colors: Array(4)}colors: (4) ['Red', 'Green', 'Blue', 'Yellow'][[Prototype]]: Object
    // It display an object of colors containing an array
    // we need a ul element of listItems
    // listItems? will take the array and loop through each item and display individual li item
    const arrayOfColors = props.colors;
    // here listItems is an jsx written inside the component
    const listItems = arrayOfColors.map(item => 
        <li key={item.toString}> {item} </li>
    )
    console.log("list Items:", listItems)
    // Its an array of li items [<li> color1 </li>......]
    return (
        <ul> {listItems} </ul>
    )

}

export default Problem1listofcolors;