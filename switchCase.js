/* function caseInSwitch(val) {
    var answer = "";
    switch (val){
        case 1:
            return "alpha";
            break; // this is not necessary since we have a RETURN afterwards
        case 2:
            return "beta";
            break;
        case 3:
            return "gamma";
            break;
        case 4: 
            return "delta";
            break;
    }    
    return answer;  
  }
  console.log(caseInSwitch(1));
  console.log(caseInSwitch(4));
   */

function switchOfStuff(val) {
    var answer = "";
    switch (val){
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }
    return answer;  
}
console.log(switchOfStuff(1));
console.log(switchOfStuff("c"));
  