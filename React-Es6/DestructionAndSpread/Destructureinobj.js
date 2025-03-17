const obj = {
    name: "abc",
    age: 20,
    city: "Sagar"
};

let {name,age,city} = obj;
console.log({name,age,city});

function myFunction({name,age,city}){
    console.log("Name is " +  name + "Age is " + age);
}

myFunction(obj);