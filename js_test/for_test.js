
function makeStar(num) {
  let half = Math.round(num / 2)
  console.log(half);

  for (let i = 1; i <= num; i++) {
    var star = '';
    for (let j = 1; j <= num; j++) {
      if(i<=half){
        if( j <= half-i  || j >= half+i   ){
          star += ' '
        }else{
          star += '*'
        }
      }
      if(i>half){
        if( j <= Math.abs(half-i)  || j >  num- Math.abs(half-i)  ){
          star += ' '
        }else{
          star += '*'
        }
      }
    }
    console.log(star);
  }
}


makeStar(7);
