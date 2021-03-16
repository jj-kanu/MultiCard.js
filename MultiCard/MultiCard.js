"use strict";

//Use case can also be quiz cards (answer slides out)

// function MultiCardGenerator() {
// 	this.cards = []
//     // this.main = null;
//     // // Sub-Cards
//     // this.left = null;
//     // this.right = null;
//     // this.up = null;
//     // this.down = null;
// 	// this..
// 	// this.. (any values you need for each 'instance' of this library)
// }

// //I just want to use it like linked list (ie card.down.down = blah), card.down.right, etc

// // Every function common to MultiCard
// MultiCard.prototype = {
//     makeCard: function () {
//         const card = document.createElement('div')
// 		card.style = 'width: 400px; height: 100px; margin: 10px; background-color: Aqua;'
        
//         const body = $('body') 
// 		body.append(card)
		
// 		this.cards.push(card) // add to the circles list
//     },
//     slideSubCard: function (e) {

//     }
// }
const log = console.log

function MultiCard(width = 300, height = 150, title = "Title", content = null) {
    const _self = {}

    _self.height = height;
    _self.width = width;

    // Make Card
    const card = document.createElement('div')
    card.style = `width: ${_self.weight}; height: ${_self.height}; margin: 10px; background-color: Aqua;`

    // Sub-Cards
    _self.left = null;
    _self.right = null;
    _self.up = null;
    _self.down = null;    

    // Make Sub-Cards
    _self.makeLeft = function (width) {
        _self.left = new MultiCard (width, _self.height)
        _self.left.right = _self;
    }
    _self.makeRight = function (width) {
        _self.right = new MultiCard (width, _self.height)
        _self.right.left = _self;
    }
    _self.makeUp = function (height) {
        _self.up = new MultiCard (_self.width, height)
        _self.up.down = _self;
    }
    _self.makeDown = function (height) {
        _self.down = new MultiCard (_self.width, height)
        _self.down.up = _self;
    }
    
    // Slide Functions
    _self.slideLeft = function (e) {
        const left = e.target;
    }

    return _self
}