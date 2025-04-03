import { useContext } from "react";
import { BioContext } from "./index"; // Ensure correct import

const Home = () => {
  // Correct way to extract multiple values from context
  const  {myName, age} = useContext(BioContext);
  console.log(myName)

  return (
    <>
      <h1>My name is {myName}</h1>
      
    </>
  );
};

export default Home;
