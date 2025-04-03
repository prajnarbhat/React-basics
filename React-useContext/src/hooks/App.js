import React from "react";
import About from "./About";
import Home from "./Home";
import { BioProvider } from "./index"; // Import the provider

const App = () => {
  return (
    <BioProvider>
      <Home />
      <About/>
    </BioProvider>
  );
};

export default App;
