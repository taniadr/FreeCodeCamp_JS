//While is the same as c++

var vet = [];
var i = 0;

while(i<5){
    vet.push(i);
    i++;
}
console.log(vet);
//for loops are the same as c++
var myVet = [];
for(var j=0; j<=10; j += 2){
    myVet.push(j);
}
console.log(myVet);

//--> backwards iteration
var ourArray1 = [];
for (var i = 10; i > 0; i -= 2) {
  ourArray1.push(i);
}
console.log(ourArray1);

// ---> iterate through whole array
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
for (var j=0; j<myArr.length; j++){
  total += myArr[j];
}
console.log(total);

console.log("Nesting Loops\n Is printing the following arr: [1,2], [3,4], [5,6]")

var arr = [
    [1,2], [3,4], [5,6]
  ];
  for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) { //note condition here!
      console.log(arr[i][j]);
    }
  }
//Looping nest

  var myPons = [
    [1, "tania"], [2, "dias"], [3, "ribeiro"]
  ];

  for (var x = 0; x < myPons.length; x++){
      for (var y=0; y < myPons[x].length; y++){
          console.log("myPons[" + x +
          "][" + y + "]: " + myPons[x][y]);
      }
  }

  