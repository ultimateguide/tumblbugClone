


var box = document.querySelector('.box');
var column = document.querySelector('.column');

console.dir(box);

var lastBackColor =  box.style.backgroundColor;

box.onclick=function (e) {

  if( box.style.backgroundColor != 'red'){
    lastBackColor = box.style.backgroundColor;
    box.style.backgroundColor = 'red';
  }else{
    box.style.backgroundColor = lastBackColor;
  }
  //console.log(box.style.backgroundColor = 'red');
}

var datas = [
  {
    "img" : {
      "alt" : "후추 유목민/후추 덕후/후추 고수들을 위한 후추 키트 프로젝트의 커버이미지",
      "src" : "https://tumblbug-pci.imgix.net/27a62f1fb360e12d9926fef6a0f3386a6b2437c9/de383d9477983e85510f17351f624e4f6330614a/9ba54d7aa4204d3e1c27fc72cbad5f174848cc1f/a613d2f1-c698-49f3-94e6-2f1c359867ba.jpeg?auto=format%2Ccompress&amp;fit=crop&amp;h=465&amp;lossless=true&amp;w=620&amp;s=446a757924095f9d3436b18651e2f422"
    },
    "type": "푸드 | 오페퍼",
    "subject": "후추 유목민/후추 덕후/후추고수들을 위한 후추 키트",
    "goal" : 3017
  },
  {
    "img" : {
      "alt" : "다이얼렉트 - 언어, 그리고 언어의 소멸에 대한 RPG 프로젝트의 커버이미지",
      "src" : "https://tumblbug-pci.imgix.net/27a62f1fb360e12d9926fef6a0f3386a6b2437c9/41b0b7f04384ed940065d74eed85e3a84df08b06/4f602a62a4a3683734c9600272eaaafb178d2ba0/183db58a-a7fe-4637-9b51-7279cb4e6dda.jpeg?auto=format%2Ccompress&amp;fit=crop&amp;h=465&amp;lossless=true&amp;w=620&amp;s=8637ade64753af5fa326a7772cc77a1a"
    },
    "type": "TRPGㅣ도서출판 초여명",
    "subject": "다이얼렉트 - 언어, 그리고 언어의 소멸에 대한 PRG",
    "goal" : 578
  },
  {
    "img" : {
      "alt" : "후추 유목민/후추 덕후/후추 고수들을 위한 후추 키트 프로젝트의 커버이미지",
      "src" : "https://tumblbug-pci.imgix.net/27a62f1fb360e12d9926fef6a0f3386a6b2437c9/de383d9477983e85510f17351f624e4f6330614a/9ba54d7aa4204d3e1c27fc72cbad5f174848cc1f/a613d2f1-c698-49f3-94e6-2f1c359867ba.jpeg?auto=format%2Ccompress&amp;fit=crop&amp;h=465&amp;lossless=true&amp;w=620&amp;s=446a757924095f9d3436b18651e2f422"
    },
    "type": "푸드 | 오페퍼",
    "subject": "후추 유목민/후추 덕후/후추고수들을 위한 후추 키트",
    "goal" : 3017
  },
  {
    "img" : {
      "alt" : "후추 유목민/후추 덕후/후추 고수들을 위한 후추 키트 프로젝트의 커버이미지",
      "src" : "https://tumblbug-pci.imgix.net/27a62f1fb360e12d9926fef6a0f3386a6b2437c9/de383d9477983e85510f17351f624e4f6330614a/9ba54d7aa4204d3e1c27fc72cbad5f174848cc1f/a613d2f1-c698-49f3-94e6-2f1c359867ba.jpeg?auto=format%2Ccompress&amp;fit=crop&amp;h=465&amp;lossless=true&amp;w=620&amp;s=446a757924095f9d3436b18651e2f422"
    },
    "type": "잡지ㅣ두루미",
    "subject": "후추 유목민/후추 덕후/후추고수들을 위한 후추 키트",
    "goal" : 3017
  }
]

console.log(datas);


var cannes = function(d){
 return  `<div class="cannes">
  <img alt="${d.img.alt}" src="${d.img.src}">
  <div class="explain">
      <div class="type">${d.type}</div>
      <div class="subject">${d.subject}</div>
  </div>
  <div class="percentage">${d.goal}% ${d.goal >3000 ? '그래이트' : '망했어'} </div>
</div>`

}


var redner = datas.map(function(d,i){
  return cannes(d)
})

console.log( redner.join('') )
column.innerHTML = redner.join('');