var myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [ 
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    }
    // Add record here
  ];

  
var myMusicCopy = JSON.parse(JSON.stringify(myMusic));

console.log(myMusicCopy[0]);