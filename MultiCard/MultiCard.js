"use strict";

function MultiCard(width = "300px", height = "150px", title = "Title", content = "ass ass", level = 0) {

    this.width = width;
    this.height = height;
    this.level = level;

    // Sub-Cards
    this.left = null;
    this.right = null;
    this.up = null;
    this.down = null; 

    this.card = document.createElement('MultiCard')
    const card = this.card
    
    if (this.level==0){
        card.style = `position:relative; width: ${this.width}; height: ${this.height}; 
                background-color: pink; border: 1px solid lightgray;
                transition: all 2s ease 0s; display: inline-block;`
        
        document.querySelector('#testDiv').appendChild(card)
    } else {
        card.style = `position:absolute; width: ${this.width}; height: ${this.height}; 
                background-color: lightblue; border: 1px solid lightgray;
                transition: all 2s ease 0s; display: inline-block;` 
        return (this)
    } 
}

MultiCard.prototype = {


    makeLeft: function (subWidth = "300px") {
        const leftCard = document.createElement('leftCard')
        this.left = new MultiCard(subWidth, this.height, null, null, this.level-1);
        log(this.left)
        this.left.card.style.zIndex = this.left.level;
        this.left.card.style.right = "0px";
        leftCard.append(this.left.card)
        this.card.appendChild(leftCard)
        this.left.right = this;
        log(this.left.right)
        // card.append(this.left)
    },

    makeRight: function (subWidth = "300px") {
        const rightCard = document.createElement('rightCard')
        this.right = new MultiCard(subWidth, this.height, null, null, this.level-1);
        this.right.card.style.zIndex = this.right.level;
        this.right.card.style.left = "0px";
        rightCard.append(this.right.card)
        this.card.appendChild(rightCard)
        this.right.left = this;
        // card.append(this.left)
    },

    makeUp: function (subHeight = "150px") {
        const upCard = document.createElement('upCard')
        this.up = new MultiCard(this.width, subHeight, null, null, this.level-1);
        this.up.card.style.zIndex = this.up.level;
        this.up.card.style.bottom = "0px";
        upCard.append(this.up.card)
        this.card.appendChild(upCard)
        this.up.down = this;
    },

    makeDown: function (subHeight = "150px") {
        const downCard = document.createElement('downCard')
        this.down = new MultiCard(this.width, subHeight, null, null, this.level-1);
        this.down.card.style.zIndex = this.down.level;
        this.down.card.style.top = "0px";
        downCard.append(this.down.card)
        this.card.appendChild(downCard)
        this.down.up = this;
    },

    slideLeft: function () {
        this.left.card.style.right = this.width
    },
    slideRight: function () {
        this.right.card.style.left = this.width
    },
    slideUp: function () {
        this.up.card.style.bottom = this.height
    },
    slideDown: function () {
        this.down.card.style.top = this.height
    },
}
// "use strict";

// function MultiCard(width = "300px", height = "150px", title = "Title", content = "ass ass", level = 10) {
//     const _self = {}

//     _self.width = width;
//     _self.height = height;
//     _self.level = level;

//     // Sub-Cards
//     _self.left = null;
//     _self.right = null;
//     _self.up = null;
//     _self.down = null;  

//     // Make Card
//     const card = document.createElement('MultiCard')
//     card.style = `position:absolute; width: ${_self.width}; height: ${_self.height}; margin: 10px; 
//                 background-color: pink; border: 1px solid lightgray; z-index: ${_self.level};
//                 transition:left .33s ease;`
//     // This actually works to move it
//     // $("body").click(function(){
//     //     log("registered click")
//     //     $("multicard").animate({left: '250px'});
//     // });


//     if (title != null){
//         const header = document.createElement('div')
//         header.style = `width: 100%; height: 25px; border-bottom: 1px solid lightgray; font-weight: bold;`
//         card.appendChild(header)
//         header.append(title)
//     }

//     //Card Content
//     const cardContent = document.createElement('div')
//     cardContent.style = `width: 100%; height: ${_self.height};`
//     card.appendChild(cardContent)
//     cardContent.append(content)

//     if (_self.level=10){
//         log(_self.level)
//         log(_self.width)
//         document.body.appendChild(card)
//         log("appended")
//     }
  

//     // Make Sub-Cards
//     _self.makeLeft = function (width = _self.width) {
//         // const leftCard = document.createElement('leftCard')
//         _self.left = MultiCard (width, _self.height, null, null, level=_self.levelthis.level-1);
//         card.append(_self.left)
//         // leftCard.append(_self.left)
//         _self.left.right = _self;
//         // card.appendChild(leftCard)
//     }
//     _self.makeRight = function (width = _self.width) {
//         _self.right = new MultiCard (width, _self.height)
//         _self.right.left = _self;
//     }
//     _self.makeUp = function (height = _self.height) {
//         _self.up = new MultiCard (_self.width, height)
//         _self.up.down = _self;
//     }
//     _self.makeDown = function (height = _self.height) {
//         _self.down = new MultiCard (_self.width, height)
//         _self.down.up = _self;
//     }
    
//     // Slide Functions
//     // const slideLeft = (e) => {
//     //     const ass = e.target;
//     //     log(e.target)
//     //     ass.style.left = '300px';
//     // }

//     const slideLeft = () => {
//         card.style.transition = "left .33s ease";
//         card.style.left = '300px'
//     }

//     card.addEventListener("click", slideLeft);

//     log("Hit the return")
//     return _self
// }