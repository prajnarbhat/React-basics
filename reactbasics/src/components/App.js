import React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import FormData from "./FormData";

const App = () =>{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<FormData/>}></Route>
            </Routes>
        </Router>
    )
}

export default App;