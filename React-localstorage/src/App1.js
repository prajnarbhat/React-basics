import { useLocalStorage } from "usehooks-ts";
const App1 = () => {

    const [ count, setCount] = useLocalStorage('count',0)

    

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

export default App1;

// 1.Use a hook to mke it easier
// Download using npm i usehooks-ts
// 2.Import it
// import {useLocalStorage} from 'usehooks-ts'
// cont [] = useLocalStorage('count',initialvalue)

// now we dont need ls.setItem and getItem