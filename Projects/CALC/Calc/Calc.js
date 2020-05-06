// define constants and variables before you use them
const defaultResult = 0;
let currentResult = defaultResult;

//functions define code to be used in a later point in time 
//Browsers are aware of functions before anything else. They have no order on the page
function add(num1, num2) { // functions can access global variables 
    const result = num1 + num2;
    return result; // A return ends the functions execution 
}
function subtract(num1, num2) {
    const result = num1 + num2;
    return result;
}
function multiply(num1, num2) {
    const result = num1 + num2;
    return result;
}
function divide(num1, num2) {
    const result = num1 + num2;
    return result;
}

addBtn.addEventListener('click', add);

console.log(defaultResult);

