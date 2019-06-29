// Setup
// JS Basics: Record Collection 
// TanoviskY 29/06/2019 = TODAY WE FINISH THIS MODULE !!!

var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [
      "1999",
      "Little Red Corvette"
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": []
  },
  "5439": {
    "album": "ABBA Gold"
  }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  var temp = collection;
  // ----> 1)se a prop não for tracks
  if (prop != "tracks") {
    if (value) {
      if (temp[id][prop]) {
        temp[id][prop] = value;
      }
      else {
        temp[id][prop] = "";
        temp[id][prop] = value;
      }
    }
    else {
      //temp[id][prop] = "";
      delete temp[id][prop];
    }
  }
  // ----> 2)se a prop for tracks mas for vazio
  else {
    if (value) {
      if (temp[id]["tracks"]) {
        temp[id]["tracks"].push(value);
      }
      else {
        temp[id]["tracks"] = [];
        temp[id]["tracks"].push(value);
      }
    }
    else {
      delete temp[id]["tracks"];
    }
  }
  collection = temp;

  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
console.log(collection);
