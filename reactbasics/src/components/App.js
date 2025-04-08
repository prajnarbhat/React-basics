import React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ContextProvider } from "./ContextProvider";
import FormData from "./FormData";
import TableData from "./TableData";

const App = () =>{
    return (
        <ContextProvider>
        <Router>
            <Routes>
                <Route path="/" element={<FormData/>}></Route>
                <Route path="/TableData" element={<TableData/>}/>
            </Routes>
        </Router>
        </ContextProvider>
    )
}

export default App;