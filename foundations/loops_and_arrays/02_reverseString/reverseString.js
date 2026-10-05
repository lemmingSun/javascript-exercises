const reverseString = function(string) {
    let arr = string.split('').reverse();
    string = arr.join('');
    return string;
};

console.log(reverseString("helllo"));

// Do not edit below this line
module.exports = reverseString;
