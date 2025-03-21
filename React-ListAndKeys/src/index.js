import React from 'react';
// importing react in our application
// ReactDom package
import ReactDOM from 'react-dom/client';
// import index.css
import "./index.css";

import Problem10 from "./Problem10.js";

// const posts = [
//   {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//   {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// ];

// const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// const tasks = [
//   { id: 1, task: "Do laundry" },
//   { id: 2, task: "Buy groceries" },
//   { id: 3, task: "Walk the dog" }
// ];

// const students = [
//   { id: 1, name: "Alice", passed: true },
//   { id: 2, name: "Bob", passed: false },
//   { id: 3, name: "Charlie", passed: true }
// ];

//const countries = ["India", "USA", "Germany", "Japan", "Australia"];

// const employees = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"];

// const students = [
//   { name: "Alice", score: 85 },
//   { name: "Bob", score: 45 },
//   { name: "Charlie", score: 60 },
//   { name: "David", score: 30 }
// ];

const faqs = [
  { question: "What is React?", answer: "React is a JavaScript library for building UI." },
  { question: "What is JSX?", answer: "JSX is a syntax extension for JavaScript." }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Problem10 faqs = {faqs}/>);

