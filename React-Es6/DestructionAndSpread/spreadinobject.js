const obj = {
    name:"abc",
    age:20
}

const copyOfObj = {...obj,name : "xyz"};
// here ...obj is copy of objet then it will overide the name
console.log("Changing name value of object:",copyOfObj);
console.log("Original object:",obj);

// changes need to be should be wriiten after
//const copyOfObj = {,name : "xyz",...obj};
// This wont work