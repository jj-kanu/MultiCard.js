"use strict";

function MultiCard(width = "300px", height = "150px", title = "Title", content = "ass ass", level = 10) {

    this.width = width;
    this.height = height;
    this.level = level;

    // Sub-Cards
    this.left = null;
    this.right = null;
    this.up = null;
    this.down = null; 

    const card = document.createElement('MultiCard')
    card.style = `position:absolute; width: ${this.width}; height: ${this.height}; margin: 10px; 
                background-color: pink; border: 1px solid lightgray; z-index: ${this.level};
                transition:left .33s ease;`

    if (this.level==10){
        log(this.level)
        document.body.appendChild(card)
        log("appended")
    } else {
        return (card)
    } 
}

MultiCard.prototype = {


    makeLeft: function (subWidth = "400px") {
        const leftCard = document.createElement('leftCard')
        this.left = new MultiCard(subWidth, this.height, null, null, this.level - 1);
        leftCard.append(this.left)
        document.querySelector('multicard').appendChild(leftCard)
        // card.append(this.left)
    }
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
//         _self.left = MultiCard (width, _self.height, null, null, level=_self.level-1);
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