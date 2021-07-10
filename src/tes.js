


var box = document.querySelector('.box');


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




var data = [
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
    "type": "푸드 | 오페퍼",
    "subject": "후추 유목민/후추 덕후/후추고수들을 위한 후추 키트",
    "goal" : 3017
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
    "type": "푸드 | 오페퍼",
    "subject": "후추 유목민/후추 덕후/후추고수들을 위한 후추 키트",
    "goal" : 3017
  }
]

console.log(data);