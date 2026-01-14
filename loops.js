//loop method

//1-> for loop

//when we use for loop it creates it perform operation on the same array and return that array.
//to iterate over a array or object and want to perform actions on each element of the array and object and want to return a new array or object we use map;




let numbers = [1,2,3,4,5];


// forEach -> 
numbers.forEach(function(nums){
 console.log(nums * nums);
})

let obj = {
    name:"Ayush",
    age:25,
    address:{
        city:"Noida"
    }
}
    
// iteration over the object
for(let key in obj){
    console.log(key + ":" + obj[key]);
    console.log(obj[key]);
}