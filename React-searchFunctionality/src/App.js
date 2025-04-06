import { useState } from "react"
const App = () => {


    const [searchvalue, setSearch] = useState("")
    

    // userlist is an array of users
    // filter items check each user with userName included in searchvalue
    const users = [
        { firstName: "John", id: 1 },
        { firstName: "Emily", id: 2 },
        { firstName: "Michael", id: 3 },
        { firstName: "Sarah", id: 4 },
        { firstName: "David", id: 5 },
        { firstName: "Jessica", id: 6 },
        { firstName: "Daniel", id: 7 },
        { firstName: "Olivia", id: 8 },
        { firstName: "Matthew", id: 9 },
        { firstName: "Sophia", id: 10 }
    ] 

    // create another state for users and filtered users to display
    const [userlist, filteredusers] = useState(users)


    // It will filter all values which are same as searchvalue
    // change the state of userslist

    const setSearchValue = (e) => {
        searchvalue = e.target.value
        setSearch(searchvalue)

        const filteredUserItems = users.filter((user) => 
            user.firstName.toLowerCase().includes(searchvalue.toLowerCase())
         )

        filteredusers(filteredUserItems)
    }

    // we have ann array of users data 

    const data = ["John","Daniel"]

    const [val, setVal] = useState('')
   

    return (
        <>
            <div>
                <input type="text" value={searchvalue} onChange={setSearchValue}/>
            </div>
            <div>
                <input list="data" onChange={(e) => setVal(e.target.value)}/>
                <datalist id="data">
                    {data.map(op => <option>{op}</option>)}
                </datalist>
            </div>

            <div>
                {val}
            </div>

           
            {userlist.length == 0 ? <p> No user found </p> :
             <ul>
            {userlist.map((user,index) => (
                <li key={index}> {user.firstName} </li>
            ))}
            </ul>

            }
            
        </>
    )

}

export default App;


// To perform search functionality we need 3 things
// 1. create a useState to save the filtered user items
//       initialy set the useState with users
//       means initialy it will be set with all users
// 2. Add filter function to the users array list
//   users.filter(user whose user.userName includes the searchvalue)
//   here we will get the array of all users which are equal to the value we have searched for in input field
// 3.Now render the filter items in the useState setfiltered items
//   We get the user list change to only filtered items