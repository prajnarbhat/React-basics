import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Home from './Home';
import Layout from './Layout';


function App() {
    return (
        
        <Router>
            <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/layout" element={<Layout/>}/>
            <Route path="*" element={<Error/>}/>
            </Routes>
        </Router>
        
    )

}

// So now when use goes to localhost:3000 it takes to Homepage
export default App;