//Grab all the buttons
var oneBtn = document.getElementById("one");
var twoBtn = document.getElementById("two");
var threeBtn = document.getElementById("three");
var fourBtn = document.getElementById("four");
var fiveBtn = document.getElementById("five");
var sixBtn = document.getElementById("six");
var sevenBtn = document.getElementById("seven");
var eightBtn = document.getElementById("eight");
var nineBtn = document.getElementById("nine");
var zeroBtn = document.getElementById("zero");

var decimalBtn = document.getElementById("decimal")
var clearBtn = document.getElementById("clear")

var displayValElement = document.getElementById("display")

var displayVal = "0";
var pendingVal;
var evalStringArray = [];

var calcNumBtns = document.getElementsByClassName("calc-btn-num");
var calcOperatorBtns = document.getElementsByClassName("operator");

var updateDisplayVal = (clickObj) => {
    var btnText = clickObj.target.innerText;

    if (displayVal === "0")
        displayVal = "";

    displayVal += btnText;
    displayValElement.innerText = displayVal;
}

//loop through arrays we've created. Give each a click function

for (let i = 0; i < calcNumBtns.length; i++) {
    calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
}
    // for (let i = 0; i < calcOperatorBtns.length; i++) {
    //     calcOperatorBtns[i].addEventListener('click', performOperation, false);
    // }

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

