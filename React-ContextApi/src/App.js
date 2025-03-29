import React from "react";

import { BioProvider } from "./context/contextApi";
import Home from "./context/contextApi/Home";
import Services from "./context/contextApi/Services";

const App = () => {
    return (
        <>
         <BioProvider> 
            <Home/>

         </BioProvider>
         <Services/>
        </>
    )
}

export default App;

// So all the components which needs the data that is that particualar props
// All those components are wrapped inside Provider

// so we erapped home.jsx inside where it can access all props in provider