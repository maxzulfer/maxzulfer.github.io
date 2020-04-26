
const changeBackground = () => {
    let newColor = '';
    let x = Math.floor(Math.random() * 7);
    switch (x) {
        case 0:
            newColor = 'red'
            document.getElementById('button').innerHTML = 'Red'
            break;
        case 1:
            newColor = 'blue'
            document.getElementById('button').innerHTML = 'Blue'
            break;
        case 2:
            newColor = 'green'
            document.getElementById('button').innerHTML = 'Green'
            break;
        case 3:
            newColor = 'yellow'
            document.getElementById('button').innerHTML = 'Yellow'
            break;
        case 4:
            newColor = 'purple'
            document.getElementById('button').innerHTML = 'Purple'
            break;
        case 5:
            newColor = 'orange'
            document.getElementById('button').innerHTML = 'Orange'
            break;
        case 6:
            newColor = 'brown'
            document.getElementById('button').innerHTML = 'Brown'
            break;
        case 7:
            newColor = 'black'
            document.getElementById('button').innerHTML = 'Black'
            break;
    } 
    let elem = document.getElementById('body');
    elem.style.backgroundColor = newColor;
}