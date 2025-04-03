// 1.CreateContext: Passing the data through the component tree without having to pass props down manually
// What are things need to be done:
//    1.Need to create createContext  => create a context object
//    2.Provider: It is a component that provides context value to its children
//    3.useContext: It is a hook that allow to consume data from the context


// // Import it

// import { createContext } from "react";
// // step1:
// // need to do createContext(), it will return a context component

// export const BioContext = createContext();
// // we pass the return context component to a variable

// // step2:  
// // Create a provider component where we pass the data that need to be used by consumer
// // In this provider=>
// //    1.We need to pass data that need to be used by diffrent components
// //    2.Pass {childre} means what are the components that need to come under Provider

// export const BioProvider = ({children}) => {

//     const myName = "abc"

//     // It will retuen a <BioContext.Provider>
//     return <BioContext.Provider value={myName}>
//         {children}
//     </BioContext.Provider>
    
// }

// // To include all child component passed in App.js
// // We need to write {children}
// // {childern} includes all components we have provided in App.js under BioProvider

import { createContext, useContext } from "react";

// Step 1: Create the context
export const BioContext = createContext();

// Step 2: Create the provider component
export const BioProvider = ({ children }) => {
  const myData = {
    myName: "abc",
    age: 20
  }

  return (
    <BioContext.Provider value={myData}>
      {children}
    </BioContext.Provider>
  );
};

// using custom hooks
// and insted using  useBioContext(BioContext) in Home.js and about.js
// we just can use this cusom hook

export const useBioContext = () => {
    const context = useContext(BioContext)
    if( context === undefined) {
        throw new Error("Component should be wrapped inside BioProvider")
    }
    return context;
}
 