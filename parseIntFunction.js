function convertToInteger(str) {
    return parseInt(str);
}

convertToInteger("56");

//parse with radix, to specify the numeric system of the number 

function convertWithBase(str, radix) {
    return parseInt(str, radix);
}

console.log(convertWithBase("11", 2)); 