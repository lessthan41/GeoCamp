// Random Win
function whoWin(a,b) {
  let ret = (Math.random() > 0.5)? a : b;
  return ret;
}

function tdValue(i){
  var val;
  if(whoPlay(i) == 'X'){
    val = 'X';
  }
  else{
    val = whoWin(whoPlay(i)[0], whoPlay(i)[1]);
  }
  return val;
}


function whoPlay(i) {
  var ret = [0,0];
  switch (i) {
    case 0:
      ret[0] = 5;
      ret[1] = 7;
      break;
    case 2:
      ret[0] = 1;
      ret[1] = 2;
      break;
    case 3:
      ret[0] = 4;
      ret[1] = 6;
      break;
    case 4:
      ret[0] = 3;
      ret[1] = 8;
      break;
    case 6:
      ret[0] = 2;
      ret[1] = 6;
      break;
    case 7:
      ret[0] = 1;
      ret[1] = 4;
      break;
    case 9:
      ret[0] = 3;
      ret[1] = 5;
      break;
    case 11:
      ret[0] = 7;
      ret[1] = 8;
      break;
    case 12:
      ret[0] = 1;
      ret[1] = 3;
      break;
    case 13:
      ret[0] = 2;
      ret[1] = 8;
      break;
    case 16:
      ret[0] = 6;
      ret[1] = 7;
      break;
    case 17:
      ret[0] = 4;
      ret[1] = 5;
      break;
    case 19:
      ret[0] = 5;
      ret[1] = 6;
      break;
    case 20:
      ret[0] = 4;
      ret[1] = 7;
      break;
    case 21:
      ret[0] = 1;
      ret[1] = 8;
      break;
    case 23:
      ret[0] = 2;
      ret[1] = 3;
      break;
    case 24:
      ret[0] = 4;
      ret[1] = 8;
      break;
    case 26:
      ret[0] = 3;
      ret[1] = 6;
      break;
    case 27:
      ret[0] = 2;
      ret[1] = 7;
      break;
    case 28:
      ret[0] = 1;
      ret[1] = 5;
      break;
    default: // for td()
      ret = 'X';
      break;
  }
  return ret;
}
