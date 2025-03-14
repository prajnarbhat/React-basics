import React from 'react';
// importing react in our application
// ReactDom package
import ReactDOM from 'react-dom/client';
//import index.css
import "./index.css";

function BookList() {
  return (
    <>
      <Book title = "Book1" author = "xyz" age = {20}/>
      <Book title = "Book2" author = "xyz"/>
      <Book title="Book3" author="It has desc"> <p>I am book3 with contents inside the tag I am accessed through children</p></Book>
    </>
  )
}

// props passed as argumnents to the component

// We can also do object destructuring while passing props as arguments
function Book({title,author,age,children}){
  console.log("Returns an empty object")
  //object destructuring passing the props object values 
  //const { title,author,age } = props;
  // the values inside the object is passed to title,author,age
  return (
    <>
      <h1> {title}  </h1>
      <p> {author} </p>
      <p> {age} </p>
      {children}

    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);

