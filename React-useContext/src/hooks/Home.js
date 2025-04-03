// import { useContext } from "react";
// import { BioContext } from "./index"; // Ensure correct import

import { useBioContext } from "./index";

const Home = () => {
  // Correct way to extract multiple values from context
  //const  {myName, age} = useContext(BioContext);
  const {myName, age} = useBioContext();
  console.log(myName)

  return (
    <>
      <h1>My name is {myName} and age is {age}</h1>
      
    </>
  );
};

export default Home;
