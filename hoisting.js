getName();
console.log(x);

// console.log(this.x);

var x =10;



function getName(){
    console.log("Hey Ayush!");
}



console.log(getName1) // this will not fully define in call stack , it will behave as a variable and gives undefined
var getName1 = () => {
    console.log("Hey I am getName1");
}

console.log(this.b);
let b = 4;
const c = 6;

console.log(b);
console.log(this.x);
console.log(this.b);
console.log(this.c);

