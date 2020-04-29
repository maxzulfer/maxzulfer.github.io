// total input 
// how many people are sharing the bill
// options for service
// bill total * service / people on bill


let billTotal = 60;

let peopleOnBill = 3;

// Tip total
const rateService = (service) => {
    let total;
    if (service === 'badService') {
       total = (billTotal * 0.05) / peopleOnBill;
    } else if (service === 'goodService') {
       total = (billTotal * 0.15) / peopleOnBill;
    } else if (service === 'greatService') {
       total = (billTotal * 0.20) / peopleOnBill;
    } else {
        console.log('Enter valid service rate')
    }
    return total;
}
console.log(rateService('badService'))

function bouncer(arr) {
    const filterArr = filterArr.filter(Boolean)
    return arr;
}

bouncer([7, "ate", "", false, 9]);

