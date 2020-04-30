const currentTime = () => {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    let t = setTimeout(function(){ currentTime() }, 1000);

    document.getElementById('clock').innerHTML = hour + ' : ' + min + ' : ' + sec;
} 

const updateTime = (k) => {
    if (k < 10) {
        return '0' + k;
    } else {
        return k;
    }
}

const currentDate = () => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth();
    let year = newDate.getFullYear();

    date = updateTime(date);
    month = updateTime(month);
    year = updateTime(year);

    document.getElementById('date').innerHTML = month + ' / ' + date + ' / ' + year;
}

currentTime();
currentDate();