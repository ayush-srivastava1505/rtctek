let a =10;
let b = a;
b = 11;

console.log(a); // 10 --> means in javascript primitive datatype is always copied by vale

let obj1={
    firstName:"Ajay",
    lastName:"Raj",
    address:{
        city:"Noida"
    }
}


let obj2 = obj1;// wrong way to copy data because it doesn't copy the data it stores the reference of the object so, when we apply changes to the obj2 the obj1 value will also change 
let obj3= {...obj1};// this will make shallow copy means outermost object are copied by value and and the nested objects are copied by reference. the outermost object have the reference of the nested object.

// obj2.firstName = "Utkarsh";

// console.log(obj1.firstName); // Utkarsh --> means in javascript non-primitive datatype is always copied by reference


// Question arises how can we make deep copy in JavaScript

//deep copy
let obj4 = structuredClone(obj1); //modern and best way to use structured clone because it copy whole data new memory address
//Things to remember=> If we are using structured clone make sure that the object we are copying doesn't contain any functions, because function is an executable code and it copy the data only otherwise it throws error

obj4.firstName = "Umesh";

console.log(obj1.firstName);