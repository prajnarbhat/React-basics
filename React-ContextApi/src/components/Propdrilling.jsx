const ChildComponents = (props) => {
    console.log(props);
    return (
        <>
        <h2> Colour is {props.colour}</h2>
        <GrandChild data={props}/>
    </> 
    )
}


const Propdrilling = () => {
    return (
        <>
            <h1> hi i am prajan </h1>
            <ChildComponents colour={"blue"}/>
        </> 
    )
}

const GrandChild = (props) => {
    console.log(props.data.colour);

}

// here we need to pass the data to every component


export default Propdrilling;