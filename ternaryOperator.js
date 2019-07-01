function checkEqual(a, b) {
    return (a == b) ? true : false;
}
console.log("checkEqual(a,b)" + checkEqual(1, 2));

var n = 4;
var m = 7;
console.log("(n == m)? // (4 == 7)?\n");
console.log ((n == m) ? true : false);

//you can use multiple ternary objects as well :

function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
  }