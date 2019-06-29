var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
    var temp = contacts;
    var existe = 0;
    for (var i = 0; i < contacts.length; i++){
            if (contacts[i].firstName == name){
                existe = 1;
                if ( contacts[i][prop])
                    return contacts[i][prop];
            }
    }
    if (existe == 1)
        return "No such property";
    else
        return "No such contact";
}

// Change these values to test your function
//lookUpProfile("Akira", "likes");
console.log(lookUpProfile("Akira", "likes"));