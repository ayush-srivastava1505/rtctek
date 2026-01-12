console.log(a); // we will get undefined 
console.log(b); //we cannot access let before it execution because it is in temporal dead zone

var a=3;
let b=5;

// const --> More strict version of let
        // 1. We have to initialize the value in const at the time of declaration 
        // 2. We cannot re-initialize it once it is initialized