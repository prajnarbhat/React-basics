import React, { useState } from "react";
// First import data
import { data } from './data.js';

function App() {
    // 1. Use useState to get the array data
    // 2. Now team will have the data stored
    const [teams, setTeam] = useState(data);
    console.log("team:", teams);
    /* 0: {id: 1, name: 'Gaurav'} 1: {id: 2, name: 'abc'} 2: {id: 3, name: 'xyz'}length: 3[[Prototype]]: Array(0)*/
    // 3. Returns an array of object
    // 4. Using map we need to access the array of objects to get individual property or value from the array
    function clearTeam() {
        setTeam([])
    }
    return (
        <>
            <h1> Accessing array of object using useState </h1>
            {teams.map((team) => {
                console.log("Get each item of array:", team); //{id: 1, name: 'Gaurav'}
                return (
                    <div key={team.id}>
                        <h4> {team.name} </h4>
                    </div>
                )
            })}
            <button type="button" onClick={clearTeam}> ClearAll </button>
            
        </>
    )
   
   
}
export default App;

// 4.map is used to access individual item of the array and return the name of all the objects in an array
// 5. return ( <div> {team.name} </div> )
// 6.We have console error
//      -> Each child in a list should have a unique "key" prop.
// 7.teams is a list here each child means each team in teams should have unique prop
// 8.Here unique property is id as id:1,2,3
// 9.Pass this unique id as a key to each child 
//       return (<div key={team.id}>
// 10.Now create a button if we click the button all the names should be cleared
// 11.So for that we use setTeam which is used to change the value of team
// 12.Create an empty array inside setTeam which will clear all items