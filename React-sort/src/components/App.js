import React, { useState } from "react";

import { Content } from "./Content";

const App = () =>{

    const [list, setList] = useState(Content)

    return (
        <>
            <div className="flex border">
                {list.map(post => (
                    <h3> {post.title} </h3>
                ))}
                {list.map(post => (
                    <h3> {post.description} </h3>
                ))}


            </div>
        </>

    )
}

export default App;