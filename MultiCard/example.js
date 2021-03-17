"use strict";

const e = $('#testDiv')
log(e.text())
log("my ass")

const cg = new MultiCard();
cg.makeRight();
cg.makeLeft();
cg.makeUp();
setTimeout(function() {cg.slideRight()}, 2000);
setTimeout(function() {cg.slideLeft()}, 2000);
setTimeout(function() {cg.slideUp()}, 2000);
// cg.left.height = "300px"