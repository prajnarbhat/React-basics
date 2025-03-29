
// 1 We need to createContext
// contents of createContext is assigned to a variable
// Need to import createContext

import { createContext } from "react";

export const BioContext = createContext()
//  here bioContext is not a variable
// always createContext() returns a component, not a variable
// first letter must be capital
// 1st step is done in creating context

// 2nd need to create provider component
// provider is a property of context component, we need to pass value to the provider,
//       which makes it accesible to child components
// we pass value to the provider component if the value is more than one we pass it as double curly braces

export const BioProvider = ({children}) => {

    const myName = "Prajna"
    const age = 10;
    return  <BioContext.Provider value={{myName: myName, age: age}}>
        {children}
        
    </BioContext.Provider>
}
// we pass the props or data inside the BioContext.provider component
// pass the myName as data
// we have created bioProvider
// we need to export both BioProvider as well as BioContext


// Imp
//passing {children} inside BioProvider
// It means in App.js we passed components inside the <BioProvider>
// That is
/* <BioProvider> <Home/> </BioProvider> */
// here what are the components we passed inside them act as children n BioProvider
// that it will take all components


// so get the data that is myName 
// use useContext
// pass the BioContext inside useContext

// so what are the data we need pass into BioContext inside BioProvider


