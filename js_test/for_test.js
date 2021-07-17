
function makeStar(num) {
  for (let i = 1; i <= num; i++) {
    var star = '';
    for (let j = num; j > 0; j--) {
      star += i<j ? ' ' : '*'
    }
    console.log(star);
  }
}


makeStar(3);
makeStar(5);
makeStar(10);