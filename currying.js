function calculateVolume(length) {
    return function (breadth) {
        return function (height) {
            return length * breadth * height;
        }
    }
}
console.log(calculateVolume(4)(5)(6));

//currying as lambafunction

 calcVolume=(a,b,c) =>a*b*c
console.log(calcVolume(1,3,4))

//currying as higher order function
add = (a, b) => a + b
console.log(add(7,9))
console.log(add(7,9)===16)