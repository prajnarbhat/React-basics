// Render the list of fruits using .map().
// Add a bold style to the first and last item.


function Problem3(props) {
    console.log(props)  // object fruits containing array of data
    const arrayOfFruits = props.fruits;
    const listItem = (
        <>
            { arrayOfFruits.map((fruit,index) =>
            // If index of particular fruit is 0 or length-1 then color should be changed
                <li key={index} style={{ color: index === 0 || index === arrayOfFruits.length-1 ? "red" : "blue"}}>{fruit}</li>
            )}
        </>
    )
    return (
        <ul> {listItem} </ul>
    )
}

export default Problem3;