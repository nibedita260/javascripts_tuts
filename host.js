//Hoisting is JavaScript's default behavior of moving declarations to the top.
var x =10;

console.log(x);  

function greet (){
    console.log("hello hositing ");
}

greet();

carName = "Volvo";
let carName;
console.log(carName)