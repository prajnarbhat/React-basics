Es6 classes:
1. Classes are type of function properties are assigned using constructor

2.class Car(){
    constructor(name){
        this.brand = name;
    }
}

// now an object is called according to the class
const myCar = new Car('ford')



1.Classes are blueprint to create an objects
2.constructor func is called automatically when object is created
3.myCar.brand   brand is an property of an object 
const Car = { brand : ?}
4.this.brand = name assigns the value to the object property
5.new Car('Ford')  so here a new object created by the vaue for the brand property as Ford

const Car = { brand:Ford };

6.Class contains a constructor to initiate the values to the keys of the object and it contains a method which return objects values 

7. class car {
    constructor() {}
    method1() {}
    method2() {}
    method3() {}
}