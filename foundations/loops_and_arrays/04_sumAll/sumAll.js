const sumAll = function(...args) {
    
    let sum = 0;
    if(args.length > 2)return "ERROR";
    if(typeof args[1] == "string"|| typeof args[0] == "string")return "ERROR";

    let arr = args.sort();
    
    for(let i = arr[0]; i <= arr[1]; i++){
    
        if(i < 0) return "ERROR";
        sum += i;
            
 
    }
    return sum;
};
console.log(sumAll(1, 4)); // returns the sum of 1 + 2 + 3 + 4 which is 10

// Do not edit below this line
module.exports = sumAll;
