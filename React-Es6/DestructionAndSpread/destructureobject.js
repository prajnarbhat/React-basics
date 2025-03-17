const obj = { a:1,b:2 };

// const {x,y} = obj;

// console.log("Values of x and y:",x,y);
// output: x and y is undefined

console.log("Value of a and b:",obj.a,obj.b);

const {a,b} = obj;
console.log("Value of a and b:",a,b);
