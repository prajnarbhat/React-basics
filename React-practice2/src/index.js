import React from 'react';
// importing react in our application
// ReactDom package
import ReactDOM from 'react-dom/client';
//import index.css
import "./index.css";


function Car(props){
    return <h2> {props.brand} name as props brand </h2>
}

function Vehicle(){
    return (
        <>
        <p> Declaring the car here </p>
        <Car brand="Ford"/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Vehicle/>);

