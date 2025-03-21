import React from "react";

function Reactformbasic() {
    function handleSubmit(e) {
        // page will get refreshed
        // the browser will take the event and refresh the page
        // To avoid that use preventDefault
        e.preventDefault();
        console.log("Form submit")
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name"/>
                <label htmlFor="age">Age</label>
                <input type="number" id="age" name="age"/>
                <button type="submit">Send</button>
            </form>
        </>
    )
    
}

export default Reactformbasic;

// 1.Form tag
// 2.Label   for="htmlFor"
// input
// in input tag name is very important
// input tag must be self closing


