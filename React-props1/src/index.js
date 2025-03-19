import React from 'react';
// importing react in our application
// ReactDom package
import ReactDOM from 'react-dom/client';
//import index.css
import "./index.css";

// 1. Props are arguments passed to react components
function Bike(props) {
  console.log(props);
  // Returns an object
  return <p> Color of bike is {props.color} </p>;
}

// 2. Passing data as props from one component to another component
function Truck(props) {
  console.log(props)
  // Props returns an object
 
  return <h1> "Brand of car is {props.brand}" </h1>
}

function Garage() {
  return (
    <>  
      <p> This will call another component with props inside this Garage component </p>
      <Truck brand = "Ford" />
    </>
  )
}

// 3. Passing props data as variables
function Sun(props) {
  return <h3> "Get the moon name {props.moonname}" </h3>
}
function Moon() {
  const name = "abc";
  return (
  <>
    <p> This is a component which has another component</p>
    <Sun moonname = { name } />
  </>
  )
}

// 4.Object is passed into component
function Star(props) {
  console.log("Props data:", props.starnames);
  // Retuens an object inside props
  return <h3>'Get name of starts {props.starnames.star1}' </h3>;
}

function CountOfStarts() {
  const name = { star1: "abc", star2: "xyz"};
  return (
    <>
      <h3> Get all the stars </h3>
      <Star starnames = {name}/>
    </>
  )
}

// If there are multiple attributes
function Book({name,author,children}) {
  return (
  <>
    <h3> "Book name is {name} and author is {author} and {children}</h3>
    <p> We have a book with no name {children} </p>
  </>
  )
}

function BookList() {
  return (
    <>
      <Book name = "abc" author = "ajay"/>
      <Book name = "xyz" author = "amar"/>
      <Book> This book has no name </Book>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);

