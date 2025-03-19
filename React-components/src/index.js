import React from 'react';
// importing react in our application
// ReactDom package
import ReactDOM from 'react-dom/client';
// import index.css
import "./index.css";

// Functional components returns html
function Car() {
  return <h1> Car component </h1>
}

// Sending props to components
// Props are the functional arguments passed to components as arguments
function Bike(props) {
  console.log("Props here is:", props);
  return (
    <>
      <h1> I have a bike which has a colour {props.color} </h1>
      // Passing components inside another component
      <Car />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Bike color="red" />);

