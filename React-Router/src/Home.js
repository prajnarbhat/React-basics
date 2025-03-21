import React from "react";
import { Link } from "react-router-dom";
function Home() {
    return (
        <>  
            <h3> This is home page </h3>
            <ul>
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/about"> About </Link></li>
                <li><Link to="/contact"> Contact </Link></li>
            </ul>
        </>
    )
}

export default Home;