// Using useRef hook how we do that?


import { useRef } from "react";

const UseRef1 = () => {

    // before we are accessing reference using doc.getElementbyId here we use useRef
    // we give the initial value to the useRef

    const userName = useRef(null);
    const password = useRef(null);


    console.log("Username:", userName,password);
    //  {current: input#password}
    // {current: input#password}
    // Inside userName and password is returning an object with current property and input value
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        // console.log("Username and password:", userName.current, password.current);
        // here we get <input type="text" is="username"/> < for passfors/>
        // to get value
        console.log("Username and password:", userName.current.value, password.current.value)
    }


    // This is how we get the refrence and its value
    
    return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="text" id="userName" ref={userName}/>
            <br></br>
            <input type="text" id="password" ref={password}/>
            <br></br>
            <button> Submit </button>

        </form>
    </>
    )
}

export default UseRef1;

// 1.We passed userName = useRef(null) that is initial value
// 2.Inside handleSubmit form we have given userName.value
// 2.It returns {current: null} 
// 3.Whenever we use userRef we get an object
// 4.Inside that we have an property called current
// 5.current property has a value that is null which is the initial value we have given
// object with proerty current and value we put inside them

// 6.Pass the ref={userName} that is refernec inside the <input field
// pass ref={userName} and ref={password}
// so now using ref attribute whatever value we put inside that input field can be accessed

// result: undefined undefined for both of them

// so inside handeSubmit while getting values inside themuse
//  userName.current passowrd.current
// result: 