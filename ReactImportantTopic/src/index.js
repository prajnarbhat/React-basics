import React from 'react';
// importing react in our application
// ReactDom package
import ReactDOM from 'react-dom/client';
//import index.css
import "./index.css";

// We have an array of objects
const books = [
  { title: "book1", author: "abc" },
  { title: "book2", author: "xyz" }
]

// Need to access the array of book
// array.map will iterate through every obj inside the array
// return the particular object array
// Every book is passed as props

function BookList() {
  return (
    <>
      { books.map((book) => {
        console.log("Book data:",book)
        return <Book book = {book} />
        console.log("Book data inside:",book)
      })}
      
    </>
  )
}

function Book(props){
  console.log(props)
  return (
    <>
      <h1> {props.book.title} </h1>
      <p> {props.book.author} </p>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);

