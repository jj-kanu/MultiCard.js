"use strict";

const e = $('#testDiv')
log(e.text())
log("my ass")

const tempContent = document.createElement('div')
// const upB = document.createElement('button')
// const downB = document.createElement('button')
// const rightB = document.createElement('button')
// const leftB = document.createElement('button')
// tempContent.appendChild(upB)
// tempContent.appendChild(downB)
// tempContent.appendChild(rightB)
// tempContent.appendChild(leftB)


const cg = new MultiCard(undefined, undefined, undefined, tempContent);
cg.makeRight("150px","test");
cg.makeLeft();
cg.makeDown();
log(cg.down)
cg.down.makeDown();
cg.down.down.makeRight();
log(cg.down.down)
setTimeout(function() {cg.slideRight()}, 2000);
setTimeout(function() {cg.slideLeft()}, 2000);
setTimeout(function() {cg.slideDown()}, 2000);
setTimeout(function() {cg.down.slideDown()}, 4000);
setTimeout(function() {cg.down.down.slideRight()}, 6000);
// cg.left.height = "300px"