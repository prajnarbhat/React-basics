
function Listcomponent(props) {
    console.log("Props:", props)
    // Object num: (4) [1, 2, 3, 4]
    console.log(props.num) //[1, 2, 3, 4]
    const arrayOfnum = props.num
    const listItem = arrayOfnum.map(item =>{
        return item;
    })
    return (
        <li> {listItem} </li>
    )
}

export default Listcomponent;