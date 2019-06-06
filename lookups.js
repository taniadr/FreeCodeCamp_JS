
function phoneticLookup(val) {
    var result = "";
  
    switch(val) {
      case "alpha": 
        result = "Adams";
        break;
      case "bravo": 
        result = "Boston";
        break;
      case "charlie": 
        result = "Chicago";
        break;
      case "delta": 
        result = "Denver";
        break;
      case "echo": 
        result = "Easy";
        break;
      case "foxtrot": 
        result = "Frank";
    }
    return result;
  }
  
console.log(phoneticLookup("charlie"));

//Using LOOKUP:

// Setup
function phoneticLookup2(val) {
    var result = "";
    var lookup = {
       "alpha": "Adams",
       "bravo": "Boston",
       "charlie": "Chicago",
       "delta": "Denver",
       "echo": "Easy",
       "foxtrot": "Frank"
    }
    result = lookup[val];
    return result;
  }
  
  // Change this value to test
  console.log(phoneticLookup2("charlie"));