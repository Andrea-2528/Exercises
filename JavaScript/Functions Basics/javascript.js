function add7 (num) {
    return Number(num) + 7;

}

function multiply (num1, num2) {
    return Number(num1 * num2);
}

function capitalize (str) {
    return String(str).charAt(0).toUpperCase() + String(str).slice(1).toLowerCase();    
}

function lastLetter (str) {
    return String(str).slice(-1);

}

let userNum1 = 3;
let userNum2 = 5;
let string = "thiS StriNG HAS Been capitaLIzED"

console.log(add7(userNum1));
console.log(multiply(userNum1, userNum2));
console.log(capitalize(string));
console.log(lastLetter(string));