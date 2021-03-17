"use strict";

const e = $('#testDiv')
log(e.text())
log("my ass")

const cg = new MultiCard();
cg.makeRight();
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