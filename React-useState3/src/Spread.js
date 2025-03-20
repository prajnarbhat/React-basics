const obj = {
    a: "1",
    b: "2"
};

const copyObj = { ...obj , a: "10", c: "20"}
console.log("Spread operator:", copyObj);