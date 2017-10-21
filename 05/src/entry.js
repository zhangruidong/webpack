import zrd from './1.txt'
import imgSrc from './entomo.jpg'

console.log(zrd)

console.log(imgSrc);
// let img = document.createElement("img");
let img = new Image();
img.src = imgSrc;
img.onload = function() {
  document.body.appendChild(img)
}