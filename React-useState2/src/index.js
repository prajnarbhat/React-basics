import React from 'react';
// importing react in our application
// ReactDom package
import ReactDOM from 'react-dom/client';
//import index.css
import App from "./App.js";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);