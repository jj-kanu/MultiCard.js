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
    
    if (this.level==0){
        this.card = document.createElement('MultiCard')
        const card = this.card

        card.style = `position:relative; width: ${this.width}; height: ${this.height}; 
                background-color: pink; border: 1px solid lightgray;
                transition: all 2s ease 0s; display: inline-block;`
        
        document.querySelector('#testDiv').appendChild(card)
    } else {
        this.card = document.createElement('SubCard')
        const card = this.card

        card.style = `position:absolute; width: ${this.width}; height: ${this.height}; 
                background-color: lightblue; border: 1px solid lightgray;
                transition: all 2s ease 0s; display: inline-block;` 
        return (this)
    } 
}

MultiCard.prototype = {

    // TODO
    // What I could do is make it so that only one level under MultiCard, and the rest of divs named left, left-down, etc
    // Remove back two letters from string to just get the number from px
    // Move sub cards to be at the edge of the cards opposed to opposite edge
    // Error check if this.direction exists before making card (ie this.right cant make this.left)

    makeLeft: function (subWidth = "300px") {
        if (this.level==0){
            const left = document.createElement('left')
            this.left = new MultiCard(subWidth, this.height, null, null, this.level-1);
            this.left.card.className = "left";
            this.left.card.style.zIndex = this.left.level;
            this.left.card.style.right = "-1px";
            this.left.card.style.top = "-1px";
            left.append(this.left.card)
            this.card.appendChild(left)
            this.left.right = this;
        } else {
            this.left = new MultiCard(subWidth, this.height, null, null, this.level-1);
            this.left.card.className = this.card.className+"-left";
            this.left.card.style.zIndex = this.left.level;
            this.left.card.style.right = this.card.style.right;
            this.left.card.style.top = this.card.style.top;
            this.card.parentElement.appendChild(this.left.card)
            this.left.right = this;
        }
    },

    makeRight: function (subWidth = "300px") {
        if (this.level==0){
            const right = document.createElement('right')
            this.right = new MultiCard(subWidth, this.height, null, null, this.level-1);
            this.right.card.className = "right";
            this.right.card.style.zIndex = this.right.level;
            this.right.card.style.left = "0px";
            this.right.card.style.top = "-1px";
            right.append(this.right.card)
            this.card.appendChild(right)
            this.right.left = this;
        } else {
            this.right = new MultiCard(subWidth, this.height, null, null, this.level-1);
            this.right.card.className = this.card.className+"-right";
            this.right.card.style.zIndex = this.right.level;
            this.right.card.style.left = this.card.style.left;
            this.right.card.style.top = this.card.style.top;
            this.card.parentElement.appendChild(this.right.card)
            this.right.left = this;
        }
    },

    makeUp: function (subHeight = "150px") {
        if (this.level==0){
            const up = document.createElement('up')
            this.up = new MultiCard(this.width, subHeight, null, null, this.level-1);
            this.down.card.className = "up";
            this.up.card.style.zIndex = this.up.level;
            this.up.card.style.bottom = "0px";
            
            up.append(this.up.card)
            this.card.appendChild(up)
            this.up.down = this;
        } else {
            this.up = new MultiCard(this.width, subHeight, null, null, this.level-1);
            this.up.card.className = this.card.className+"-up";
            this.up.card.style.zIndex = this.up.level;
            this.up.card.style.bottom = this.card.style.bottom;
            this.card.parentElement.appendChild(this.up.card)
            this.up.down = this;
        }
    },

    makeDown: function (subHeight = "150px") {
        // If top level, make first sublevel
        if (this.level==0){
            const down = document.createElement('down')
            this.down = new MultiCard(this.width, subHeight, null, null, this.level-1);
            this.down.card.className = "down";
            this.down.card.style.zIndex = this.down.level;
            this.down.card.style.left = "-1px";
            this.down.card.style.top = "-1px";
            
            down.append(this.down.card)
            this.card.appendChild(down)
            this.down.up = this;
        } else { //Else, append to name and make new element
            this.down = new MultiCard(this.width, subHeight, null, null, this.level-1);
            this.down.card.className = this.card.className+"-down";
            this.down.card.style.zIndex = this.down.level;
            this.down.card.style.left = this.card.style.left;
            this.down.card.style.top = this.card.style.top;
            this.card.parentElement.appendChild(this.down.card)
            this.down.up = this;
        }
        
    },

    // MAYBE MOVE ALL DIVS WITH MATCHING PREFIXES AT THE SAME TIME!!
    // GET rid of ending prefix to add
    slideLeft: function () {
        //Might have to change document to parent element
        for (let subCard of document.querySelectorAll(`subcard[class^=${this.left.card.className}]`)){
            subCard.style.right = +subCard.style.right.slice(0,-2) + +this.width.slice(0,-2) + "px";
        }
    },
    slideRight: function () {
        for (let subCard of document.querySelectorAll(`subcard[class^=${this.right.card.className}]`)){
            subCard.style.left = +subCard.style.left.slice(0,-2) + +this.width.slice(0,-2) + "px";
        }
    },
    slideUp: function () {
        for (let subCard of document.querySelectorAll(`subcard[class^=${this.up.card.className}]`)){
            subCard.style.bottom = +subCard.style.bottom.slice(0,-2) + +this.height.slice(0,-2) + "px";
        }
    },
    slideDown: function () {
        for (let subCard of document.querySelectorAll(`subcard[class^=${this.down.card.className}]`)){
            subCard.style.top = +subCard.style.top.slice(0,-2) + +this.height.slice(0,-2) + "px";
        }
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
//         // const left = document.createElement('left')
//         _self.left = MultiCard (width, _self.height, null, null, level=_self.levelthis.level-1);
//         card.append(_self.left)
//         // left.append(_self.left)
//         _self.left.right = _self;
//         // card.appendChild(left)
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