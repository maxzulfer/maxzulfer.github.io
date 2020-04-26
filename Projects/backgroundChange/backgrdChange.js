
const changeBackground = () => {
    let newColor = '';
    let x = Math.floor(Math.random() * 7);
    switch (x) {
        case 0:
            newColor = 'red'
            break;
        case 1:
            newColor = 'blue'
            break;
        case 2:
            newColor = 'green'
            break;
        case 3:
            newColor = 'yellow'
            break;
        case 4:
            newColor = 'purple'
            break;
        case 5:
            newColor = 'orange'
            break;
        case 6:
            newColor = 'brown'
            break;
        case 7:
            newColor = 'black'
            break;
    } 
    let elem = document.getElementById('body');
    elem.style.backgroundColor = newColor;
}