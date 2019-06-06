
function sequentialSizes(val) {
    var answer = "";
    switch (val){   

        case 1:
        case 2:
        case 3:
            answer = "Low"; 
            break;  
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
    }
    return answer;  
  }
  
console.log(sequentialSizes(1));
  

function chainToSwitch(val) {
    var answer = "";
    switch(val){
        case 1:
            answer = "a";
            break;
        case 2:
            answer = "b";
            break;
        default:
            answer = "c";
            //break; // last condition has no need for break
    }
    return answer;
}
console.log(chainToSwitch(3));

/*returning boolean values from functions*/

function isEqual(a,b) {
    return a === b; 
}
console.log(isEqual(1,1));

function isLess(a, b) {
    return a < b;
}
console.log(isLess(10, 15));