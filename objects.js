

var dictionaryObj = {
    "word" : "video",
    "idiom": "english",
    "unique": "no",
    "tam": 0 //assignment must be done outside from here. maybe in a class with this object...
};
var displayObj = dictionaryObj;

dictionaryObj["tam"] = dictionaryObj["word"].length;

console.log("Tanoviski`s Dictionary");
console.log(displayObj.word + " - " + displayObj.tam);

// ANOTHER CASE, adding properties after object being defined:

// Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };
  
  ourDog.bark = "bow-wow";
  
  // Setup
  var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  // Only change code below this line.
  
  myDog.bark = "woof";
  console.log(myDog.bark);

  //Must be in the original var or it can be in a declared object of that type?

  var dogTest = myDog;
  dogTest.bark = "yoof";
  console.log(dogTest.bark);
//pode ser numa var, o codigo acima eh valido

  var anotherDogTest = myDog;

  console.log(anotherDogTest)