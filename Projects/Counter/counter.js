// count up buttun
// countdown button
// turn red when negative/green when positive
// count number 

let mainCount = document.getElementById('count') 
let count = 0;

let countColor = document.getElementById('count').innerHTML;

let lowerBtn = document.getElementById('btn 1');
let addBtn = document.getElementById('btn 2');
let zeroButton = document.getElementById('zeroBtn');



lowerBtn.onclick = function() {
    count--;
    mainCount.innerHTML = count;
};

addBtn.onclick = function() {
    count++;
    mainCount.innerHTML = count;
}
zeroButton.onclick = function() {
    count = 0;
    mainCount.innerHTML = count;
}

console.log(count)


const colorChange = () => {
    if (count.value < 0) {
        document.getElementById('count').style = 'Color: red'
    } else if (count.value > 0) {
        document.getElementById('count').style ='Color: green'
    } else {
        document.getElementById('count').style = 'Color: black'
    }
}
colorChange()



