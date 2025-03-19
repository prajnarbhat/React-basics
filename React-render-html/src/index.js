import React from 'react';
// importing react in our application
// ReactDom package
import ReactDOM from 'react-dom/client';
//import index.css
import "./index.css";

//   1.React rendering HTML content
const myElement1 = (
  <>
    <div className = "container">
      <h1>Heading</h1>
      <p>Body</p>
    </div>
  </>
)

// 2. Using JSX
const myElement2 = <h1> Body tag </h1>

// 3.Wht it actually does
// react.createElement is func which takes parameter
//  1)what to render that is tag which tag to be rendered
//  2){} empty object called as props
//  3)Content to be inside the h1 tag

const myElement3 = React.createElement('h1',{},'Content inside h1 tag');

// 4.Expression inside the tag
// Expressions are written in form of {} curly braces
const myElement4 = <h1> Sum of numbers 2 and 3 is {2 + 3} </h1>

// 5.When multiple lines pt the html inside parenthesis
const myElement5 = (
  <ul>
    <li> list1 </li>
    <li> list2 </li>
    <li> list3 </li>
    <li> list4 </li>
  </ul>
)

// 6.Html element should be enclosed between one top level element
//   When there are multiple para or divs all should be placed inside one parent tag
const myElement6 = (
  <div>
    <p> Para1 </p>
    <p> Para2 </p>
    <div class="div2">
      <p> Para3 </p>
    </div>
  </div>
)

// 7.Fragments are used to wrap all elements
const myElement7 = (
  <>
    <p> Para1 </p>
    <p> Para2 </p>
  </>
)

// 8.All tags must be closed
const myElement8 = <input type="text"/>

// 9. Classes must be names as 'className'
const myElement9 = <h1 className="myclass">Hello World</h1>;

// 10. If statement should be places outside JSX
const x1 = 5;
let text = "Hi";
if ( x1 < 10 ) {
  text = "Hello"
}

const myElement10 = <h1> {text} </h1>

// 11.Using ternary operator
let x = 5;
const myElement11 = <h1> { (x) < 10 ? "Hello" : "Hi" }</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

