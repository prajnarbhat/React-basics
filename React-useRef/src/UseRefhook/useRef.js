const UseRef = () => {

    // To get the refrence of both the input field we use d.getElementById
    const userName = document.getElementById('userName')
    const password = document.getElementById('password')

    // we get refrences of bth userName and password
    // To get the value inside them use .value

    console.log("Username:", userName,password);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        console.log("Username and password:", userName.value, password.value);
    }


    // This is how we get the refrence and its value
    
    return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="text" id="userName"/>
            <br></br>
            <input type="text" id="password"/>
            <br></br>
            <button> Submit </button>

        </form>
    </>
    )
}

export default UseRef;

// 1.We type values inside the input text
// 2.To get the value inside them how?