
// Insert Table
for(var i=0; i<30; i++){
  let val = 0;
  val = tdValue(i);
  $('#table').find('td')[i].append(val)
}

var score = [0,0,0,0,0,0,0,0];
var count = [0,0,0,0,0,0,0,0];
var flowCount = 0
var scoreFlow = new Array(5);
var pd = [
          [0,0,0,0,0,0,0,0], // pd1
          [0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0] // pd6
        ];
var flow1 = [50,100,70,20,90,30]; // 價目表
var flow2 = [110,20,40,150,10,60]; // 價目表

// 算積分
for(var round=1; round<6; round++){

  count = [0,0,0,0,0,0,0,0];

  // 第N輪贏的積分
  for(var i=6*round-6; i<6*round; i++){
    let val = $('#table').find('td')[i].innerHTML;

    if(val == 'X'){
      continue;
    }

    score[parseInt(val)-1] += 100;
    count[parseInt(val)-1]++;
    // console.log(parseInt(val)-1);
  }

  // 第N輪輸的積分
  for(var i=0; i<8; i++){
    let toAdd = (1 - count[i])*40;
    score[i] += toAdd;
  }

  // console.log(score);
  // 第N輪購買道具與否
  for(var i=6*round-6; i<6*round; i++){ // i 為 該回合 的關卡們 0-5 6-11...
    let val = $('#table').find('td')[i].innerHTML;

    // console.log(val);
    if(val == 'X'){
      continue;
    }

    else{
      for(var j=0; j<2; j++){
        // console.log(whoPlay(i)[j]);
        if(score[whoPlay(i)[j] - 1] >= 60){ // For All 分數大於60分的
          if(whoWin(0,1) == 0){ // 50%
            score[whoPlay(i)[j] - 1] -= 60;
            // console.log(whoPlay(i)[j]);
            pd[i%6][whoPlay(i)[j] - 1] += 1;
          }
        }
      }
    }
  }
  scoreFlow[flowCount] = score.slice();
  flowCount++;
  console.log(scoreFlow);
}


// 把買道具搞出來
for(var i=0; i<6; i++){
  for(var j=0; j<8; j++){
    if(pd[i][j] == 1){
      $('#ul2').find('li')[j].innerHTML += ' 第'+ (i+1) + '關 ';
    }
  }
}

// console.log(score);
// for(var i =0; i<6; i++){
//   console.log(pd[i]);
// }

// 先遇到哪個攤販
for(var i=0; i<8; i++){
switch (whoWin(0,1)) {
  case 0: // 先遇攤販一
      for(var j=0; j<6; j++){
        if(flow1[j] > 60){ // if 價格 > 60
          score[i] += flow1[j] * pd[j][i]; // 價錢 * 該組有的個數
          // console.log(pd[j][i]);
          if(pd[j][i] > 0){
            pd[j][i] -= 1;
          }
        }
        else{
          if(Math.random() > 0.7){
            score[i] += flow1[j] * pd[j][i];
            // console.log(pd[j][i]);
            if(pd[j][i] > 0){
              pd[j][i] -= 1
            }
          }
        }
        if(flow1[j] <= 60){  // 遇到第二個商人時 > 60的已經被買光了
          score[i] += flow2[j] * pd[j][i]; // 價錢 * 該組有的個數
          if(pd[j][i] > 0){
            pd[j][i] -= 1;
          }
        }
      }

    break;

  case 1: // 先遇攤販二
  for(var j=0; j<6; j++){
    if(flow2[j] > 60){ // if 價格 > 60
      score[i] += flow2[j] * pd[j][i]; // 價錢 * 該組有的個數
      if(pd[j][i] > 0){
        pd[j][i] -= 1;
      }
    }
    else{
      if(Math.random() > 0.7){
        score[i] += flow2[j] * pd[j][i];
        if(pd[j][i] > 0){
          pd[j][i] -= 1
        }
      }
    }
    if(flow2[j] <= 60){  // 遇到第二個商人時 > 60的已經被買光了
      score[i] += flow1[j] * pd[j][i]; // 價錢 * 該組有的個數
      if(pd[j][i] > 0){
        pd[j][i] -= 1;
      }
    }
  }
    break;
  }
}

// 把累計表搞出來
for(var i=0; i<40; i++){
    let val = 0;
    let j = i%8;
    console.log(Math.floor(i/8));
    // console.log(j);
    val = scoreFlow[Math.floor(i/8)][j];
    // console.log(val);
    $('#cumulative').find('td')[i].append(val);
}
for(var i=40; i<48; i++){
  $('#cumulative').find('td')[i].innerHTML += score[i-40];
}



// 把分數搞出來
for(var i=0; i<8; i++){
  $('#ul').find('li')[i].innerHTML += score[i];
}


// console.log(score);
// console.log(count);
