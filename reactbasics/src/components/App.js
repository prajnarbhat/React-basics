import React, { useState } from "react";



const App = () =>{

    const [item, setItem] = useState([])
    const [input, setInput] = useState("")
    const handleSubmit =  () => {
        if(input.trim() === "") return;

        setItem([...item,input])
        setInput("")

    }
    return (
        <>
            <div>
                <input type="text" value={input} 
                    onChange={(e) => setInput(e.target.value)}/>
                <button type="button" onClick={handleSubmit}> Add Item</button>
            </div>
            <div>
                 {item}
            </div>
        </>
    )
}

export default App;