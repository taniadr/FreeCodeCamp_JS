/*
Basic JavaScript: Global Scope and Functions

In JavaScript, scope refers to the visibility of variables. 
Variables which are defined outside of a function block 
have Global scope. This means, they can be seen everywhere 
in your JavaScript code.
          
Variables which are used without the var keyword are 
automatically created in the global scope. 
This can create unintended consequences 
elsewhere in your code or when running a function again. 
You should always declare your variables with var.
*/

var myGlobal = 10;

function fun1() {
  oopsGlobal = 5; 
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

//////////////////////////////////////////////////
var sum = 0;
function addThree() {
  sum = sum + 3;  //it changes the value of global var sum, but
                    //it doesn't return as value.
}

function addFive(){
  sum += 5;
}

// Only change code above this line
var returnedValue = addFive();

