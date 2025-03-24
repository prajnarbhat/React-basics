// 1.How to fetch data using useEffect then how to display them
// 2.Data needs to be fetched 
// 3.Here we are getting data from  https://api.github.com/users this url

import React, { useEffect, useState } from "react";

function Useeffectfetchingdata() {

    // so write a function  to fetch the data
    async function getData() {
        // we fetch data using async await
        const response = await fetch('https://api.github.com/users')
        console.log("Response data:", response);
        // Here response data object will be dispalyed we need json function from it
        const data = await response.json();
        console.log("Data fetched:", data); 
        // We get array of object data

        // here we pass the data to setUser function to display data in screen and change the initial empty data
        setUsers(data);
    }

    // so this data needs to be fetched or this getData needs to be called when our application re renders 
    // Pass this inside useEffect function
    useEffect(() => {
        getData()
    },[])
    // We don't want this to be fetched everytime the data needs to be fetched only once when it rerenders first time
    // So 2nd parameter inside useEffect will be []
    
    // Data needs to be displayed in screen
    // Use state to display data
    const [ users, setUsers] = useState([])
    // here initially users is an empty array
    
    const listItems = (
        // users is an array we need to loop through it to get individual data
        users.map((user) => (
            <p> {user.login} </p>
        ))
    )
    // so initially nothing will be displayed as users is an empty array 
    // Now using setUsers manipulate or change the users data from empty array to array of object
    //         data which has been fetched from getData function
    return (
        <>
            <h3> {listItems} </h3>
        </>
    )
}

export default Useeffectfetchingdata;