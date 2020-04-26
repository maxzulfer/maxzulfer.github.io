// count up buttun
// countdown button
// turn red when negative/green when positive
// count number 

let mainCount = document.getElementById('count').innerHTML = 0;
let lowerBtn = document.getElementById('btn 1')
let addBtn = document.getElementById('btn 2')

mainCount++

function addCount() {
    
}


const colorChange = () => {
    if (mainCount < 0) {
        document.getElementById('count').style = 'Color: red'
    } else if (mainCount > 0) {
        document.getElementById('count').style ='Color: green'
    } else {
        document.getElementById('count').style = 'Color: black'
    }
}
colorChange()



console.log(mainCount)