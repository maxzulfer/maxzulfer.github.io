// finding the length of the longest word in a string 4/13
const findLongestWordLength = (str) => {
    let words = str.split(' ');
    let maxLength = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }
    return maxLength;
}

console.log('The longest word in this string is ' + findLongestWordLength('Ready to start building polished websites and web applications? Get the skills you need to turn your ideas into reality!') + ' chracters long.')


const findLongestWordLengthAlt = (str) => {
    return Math.max(...str.split(' ').map(word => word.length));
}

console.log(findLongestWordLengthAlt('Ready to start building polished websites and web applications? Get the skills you need to turn your ideas into reality!'))



