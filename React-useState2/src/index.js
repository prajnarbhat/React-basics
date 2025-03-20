import React from 'react';
// importing react in our application
// ReactDom package
import ReactDOM from 'react-dom/client';
//import index.css
import "./index.css";

function EventList() {
  function clickHandler() {
    alert("Hello world");
  }
  return (
    <>
      <h1> Basics about Events </h1>
      <button type="button" onClick={clickHandler}> Click me </button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<EventList />);

