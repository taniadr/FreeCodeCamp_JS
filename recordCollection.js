// Setup
// JS Basics: Record Collection 
// Code-reduced version
// Old version available at "acessingNestedObjects.js"

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
var collectionCopy = JSON.parse(JSON.stringify(collection));

function addValueToProp(album, prop, value) {
    var aux = collection;
    if (prop == "tracks")
        aux[album]["tracks"].push(value);
    else
        aux[album][prop] = value;
    return aux;
}

function updateRecords(id, prop, value) {
    var temp = collection;
    if (value == "") {
        delete temp[id][prop];
    }
    else {
        if (temp[id][prop]) {
            temp = addValueToProp(id, prop, value);
        }
        else {
            switch (prop) {
                case "tracks":
                    temp[id][prop] = [];
                    temp[id]["tracks"].push(value);
                    break;
                default:
                    temp[id][prop] = "";
                    temp[id][prop] = value;
            }
        }
    }
    collection = temp;
    return collection;
}

/*  //Test Cases
updateRecords(5439, "artist", "ABBA");
updateRecords(5439, "tracks", "Take a Chance on Me")
updateRecords(2548, "artist", "")
updateRecords(1245, "tracks", "Addicted to Love")
updateRecords(2468, "tracks", "Free")
updateRecords(2548, "tracks", "")
updateRecords(1245, "album", "Riptide")
*/