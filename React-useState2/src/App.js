import React, { useState } from "react";


// 1.Use state which is used to change the state of application.
// 2.First need to be imported.
// 3.UseState hook is a function, useState().
// 4.It returns an array with 2 values.
// 5.console.log(useState()) => returns [ undefined,function ].
// 6.The function present inside array will edit,change or manipulate the text/string/Ds present inside.
// 7.useState("Hello")  => returns [ "hello",f ]  here it can be boolean,string or any DS
// 8. function is used to manipulate the value present in array

function App() {
    // console.log("UseState:", useState(1));   // [1, ƒ]
    // console.log("First values inside the useState array:", useState(1)[0]);
    // // First values inside the useState array: 1
    // console.log("Second values inside the useState array:", useState(1)[1]);
    // // function" === typeof JSCompiler_OptimizeArgumentsArray_p1 && console.error("State updates from the useState() and u…
    const [ text, setText] = useState("Micro");
    function handleClick() {
        console.log("Text value:", text);
        // Now use setText to manipulate text after button is clicked
        if( text == "Micro") {
            setText("Mini");
        }else {
            setText("Micro");
        }    
    }
    return (
        <>
            <h1> UseState </h1>
            <h3> {text} </h3>
            <button type="button" onClick={handleClick}> Click me</button>
        </>        
    )
}
export default App;

// 9.UseState will return an array
// 10.Array can be destructured
// 11.const [] = useState("Micro"); array destructuring 
// 12.const [text] =useState("Micro");
// 13.here text will be assigned as first values of the array
// 14.const [text,setText] setText will be assigned with a function which is used to manipulate the text