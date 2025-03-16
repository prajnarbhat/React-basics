import React from 'react';
// importing react in our application
// ReactDom package
import ReactDOM from 'react-dom/client';
//import index.css
import "./index.css";


// const myElement = <h1> React accept expression {7+7} </h1>

// const myElement = (
//   <ul>
//     <li>Apple</li>
//     <li>Banana</li>
//     <li>grapes</li>
//   </ul>
// )

// using fragment to wrap multipe lines
// The fragments will be empty tag <>
// const myElement = 
//   <>
//     <p> One para </p>
//     <p> Second para </p>
//   </>

// html elements should be enclosed
// const myElement = (
//   <label>
//   Input content: <input type="text" style={{color:"red"}} />
//   </label>
// )

// Using classname inside the tags as attributes
//const myElement = <h1 className = "class-name"> Hello </h1>

// Using if else in the

// let name = "Prajns"
// let x = 4;
// if ( x < 5 ){
//   name = "Pruthvi"
// }

// const myElement = <h1> {name} </h1>

// Using ternary operator
let x = 3;
const myElement = <h1>{ (x) < 5 ? "Prajna" : "Pruthvi"}   </h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

