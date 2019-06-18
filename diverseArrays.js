// Setup
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
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {

  if (prop != "tracks"){
    if (value)  
        collection[id["prop"]] = value;
    else 
        collection[id["prop"]].pop();
  }      
  else {
      if (collection[id["prop"]].length == 0) {
        collection[id["prop"]] = [];   
      }
      collection[id("tracks")].push(value);
      }
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
