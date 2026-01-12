// A function which take a function as an argument or a funcyion which return a function is known as highOrderFunction

const radius = [1,2,5,3];

const area = function (radius){
    return Math.PI * radius * radius;
};

const circumference = function(radius){
    return 2 * Math.PI * radius;
};

const diameter = function(radius){
    return 2 * radius;
}

const calculate = function(radius, logic){
    const output = [];
    for(let i = 0; i < radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(radius.map(area));


// console.log(calculate(radius, area));`
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));