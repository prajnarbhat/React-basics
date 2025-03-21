// Render each book title inside a <ul>

import React from "react";

function Problem2(props) {
    console.log("Props data:",props); // array of object
    const arrayOfBooks = props.books;

    const BookTitle = (
        arrayOfBooks.map(item => 
            // console.log("Each object of array:", item)
            <li key={item.id}> {item.title} </li>
        )
    )
    return (
        <>
         <ul> {BookTitle} </ul>   
        </>
    )

}

export default Problem2;
