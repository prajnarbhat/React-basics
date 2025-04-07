import { useEffect, useState } from "react";
const App = () => {

    const [ count, setCount] = useState(+localStorage.getItem('count') || 0)

    useEffect(() => {
        localStorage.setItem('count',count.toString());
    })

    const increment = () => {
        setCount(count + 1);
        
    }

    const decrement = () => {
        setCount(count-1);
    }


    return (
        <>
            <div> {count} </div>
            <button onClick={increment}> Increment </button>
            <button value={count}> Reset </button>
            <button onClick={decrement}> Decrement </button>
        </>
    )
}

export default App;

// here the values get increment and decrement but when I refresh the page it will set to initial value as 0
// the values incremented or decremented should be stored in local storage


// 1. We use localstorage.setItem() to store values in ls
// 2. localstorage.setItem("name given to ls","the thing that need to be stored")
// Second parameter must be a string
// localStorage.setItem('count',count.toString())
// hence the count value stored in ls

// 3. To get the count value stored in ls we use getItem
//    localStorage.getItem('count')

// 4.After using the ls.setItem only the catch 
//   after changing state using setCount we are storing in ls it will take the old state only
//  Use UseEffect
//  5.Inside useEffect we call the setItem ls thing
//    In the second parameter pass the count 
//    Whenever count value changes useEffect will run and that count value stored in ls


// now insde useState of count
// use localStorage.getItem('count)
// It returns a string values from ls that is "01111"
// parse this using + before ls.getItem
