

var count = 0;

function cc(card) {    
    var ans = "";
    switch (card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count += 1;
            break;
        case 7:
        case 8:
        case 9:
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count -= 1;
    }
    if (count > 0)
    {
      ans = count + " Bet";
    }
  else{
    ans = count + " Hold";
  }   
    return ans;
}

cc(2); cc(3); cc(4); cc(5);
console.log(cc(6));

//5 Bet
