const arr= [2,5,6,7,8];

// MAP
// function binary(x){
//     return x.toString(2);
// }

// function double(x){
//     return x*2;
// }

// function tripple(x){
//     return x * 3;
// }

// const output = arr.map(double);


// console.log(output);

// console.log(arr.map(tripple));
// console.log(arr.map(binary));







//filter odd values

// function isOdd(x){
//     return x%2 !== 0;
// }

// function isEven(x){
//     return x%2 === 0;
// }

// function greaterThanFour(x){
//     return x > 4;
// }

// const output = arr.filter(isOdd);
// console.log(output);
// console.log(arr.filter(isEven));
// console.log(arr.filter(greaterThanFour));






//reduce

//sum or max

// function sum(arr){
//     let sum=0;
//     for(let i = 0; i < arr.length; i++){
//         sum = sum +arr[i];
//     }
//     return sum;
// }

//  const output = arr.reduce(function(acc, curr){
//     acc = acc + curr;
//     return acc;
// },0); // Here 0 is the initial value of the accumulator


// find maximum number in array

// const output = arr.reduce(function(acc, curr){
//     if(acc < curr){
//         acc = curr;
//     }
//     return acc;
// },arr[0]);




// using of map on a complex data

const user = [
    { firstName:"Ayush" , lastName:"Srivastava", age:25},
    { firstName:"Shivam" , lastName:"Raj", age:25},
    { firstName:"Anand" , lastName:"Kumar", age:67},
    { firstName:"Ghulam" , lastName:"Ali" ,age:80},
]


// const output = user.map((x) => x.firstName +" " + x.lastName)



//count the number of person by age
// {26 : 2, 67:1, 80:1}

// const output = user.reduce(function(acc, curr){
//     if(acc[curr.age]){
//         acc[curr.age] = ++acc[curr.age];
//     }else{
//         acc[curr.age] = 1;
//     }
//     return acc;
// },{});



//find the user whose age is less than 30

//using function chaining
// const output = user.filter((x)=>x.age < 30).map((x)=> x.firstName);

//using reduce
const output = user.reduce((acc, curr)=>{
    if(curr.age < 30){
        acc.push(curr.firstName);
    }
    return acc;
},[])

console.log(output);