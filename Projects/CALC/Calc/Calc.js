//Grab all the buttons
let oneBtn = document.getElementById("one");
let twoBtn = document.getElementById("two");
let threeBtn = document.getElementById("three");
let fourBtn = document.getElementById("four");
let fiveBtn = document.getElementById("five");
let sixBtn = document.getElementById("six");
let sevenBtn = document.getElementById("seven");
let eightBtn = document.getElementById("eight");
let nineBtn = document.getElementById("nine");
let zeroBtn = document.getElementById("zero");

let decimalBtn = document.getElementById("decimal");
let clearBtn = document.getElementById("clear");

let displayValElement = document.getElementById("display");

let displayVal = "0";
let pendingVal;
let evalStringArray = [];

let calcNumBtns = document.getElementsByClassName("calc-btn-num");
let calcOperatorBtns = document.getElementsByClassName("operator");

//loop through arrays we've created. Give each a click function
console.log(nineBtn)

let updateDisplayVal = (clickObj) => {
    let btnText = clickObj.target.innerText;

    if (displayVal === "0")
        displayVal = "";

    displayVal += btnText;
    displayValElement.innerText = displayVal;
}   

let performOperation = (clickObj) => {
    let operator = clickObj.target.innerText;

    switch (operator) {
        case '+':
            pendingVal = displayVal;
            displayVal = 0;
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+')
            break;

        case '-':
            pendingVal = displayVal;
            displayVal = 0;
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-')
            break;

        case 'x':
            pendingVal = displayVal;
            displayVal = 0;
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('*')
            break;
        
        case '/':
            pendingVal = displayVal;
            displayVal = 0;
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/');
            break;

        case '=':
            evalStringArray.push(displayVal);
            let evaluation = eval(evalStringArray.join(' ')); 
            displayVal = evaluation + '';
            displayValElement.innerText = displayVal;
            evalStringArray = [];        
            break;

        default:
            break;
    }
}

for (let i = 0; i < calcNumBtns.length; i++) {
    calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
}
for (let i = 0; i < calcOperatorBtns.length; i++) {
    calcOperatorBtns[i].addEventListener('click', performOperation, false);
}

clearBtn.onclick = () => { 
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerHTML = displayVal;
}
decimalBtn.onclick = () => {
    if(!displayVal.includes('.'))
        displayVal += '.';
    displayValElement.innerText = displayVal;
}
const defaultResult = 0;
let currentResult = defaultResult;


