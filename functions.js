// 2 types

// 1 normal function 
// 2 arrow function
// -> normal function is partially hoisted and arrow function is not hoisted and
//    it lexically binds this keywords (Lexical environment is local memory + lexical environment of it parent)

                       // -> Normal Function--------->

var x =1;
a();
b();
console.log(x);

function a(){
    var x = 10;
    console.log(x);
}

function b(){
    var x=100;
    console.log(x);
}

//function statement also known as function declaration
function a(){
    console.log("a called");
}

//function expression
var b = function(){
    console.log("b called")
}

//Anonymous function -> function without name (we can create by assigning function to a variable)
 var c = function(){
    console.log("c called");
 }

 //named function expression
 var d = function xyz(){
    console.log("d called")
    console.log(xyz);
}
d();

// xyz();       //error because it is not in local environment. 
            // we can call it inside the function.

//first class function(function can be passed as an agrument in a function, function can be accept function as parameter function can, function can return a function)



                        // ->arrow function (ES6)

const t = (a,b)=> a+b; // if we have one statement we can go by this method with no return statement

const z = () =>{
    return "Hello Ayush!";
}

console.log(z());
t(3,5);

setTimeout(()=>{  // Anonymous as well arrow function
    console.log("Time over")
},10000);