"use strict";

//Current Limitation: Rest of page zindex must be lower than lowest cards z-index (Maybe change z-index once card is out)
// For subcards bigger than maincard, transition visibility on slide out (initial check for size: if bigger, set invisible)
// If logo needed, use russian nesting doll on a card

function MultiCard(width = "300px", height = "150px", title = "Title", content = "", level = 0) {

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
                background-color: white; border: 1px solid lightgray;
                transition: all 1s ease 0s; display: inline-block;`

        if (title != null){
            const header = document.createElement('div')
            header.style = `width: 100%; height: 25px; border-bottom: 1px solid lightgray; font-weight: bold;`
            card.appendChild(header)
            header.append(title)
        }
    
        //Card Content
        const cardContent = document.createElement('div');
        cardContent.className = "cardContent";
        cardContent.style = `width: 100%; height: ${this.height};`
        card.appendChild(cardContent)
        cardContent.append(content)
        
    } else {

        //Checks if subcard is in or out
        this.out = false;

        this.card = document.createElement('SubCard')
        const card = this.card

        card.style = `position:absolute; width: ${this.width}; height: ${this.height}; 
                background-color: white; border: 1px solid lightgray;
                display: inline-block;

                transition: all 1s ease 0s, z-index 2000ms ease-in, opacity 1000ms linear, visibility 1000ms linear; 
                visibility: hidden; opacity: 0;`
                // transition: visibility 0s linear 300ms, opacity 300ms; 

        if (title != null){
            const header = document.createElement('div')
            header.style = `width: 100%; height: 25px; border-bottom: 1px solid lightgray; font-weight: bold;`
            card.appendChild(header)
            header.append(title)
        }
    
        //Card Content
        const cardContent = document.createElement('div')
        cardContent.className = "cardContent";
        cardContent.style = `width: 100%; height: ${this.height};`
        card.appendChild(cardContent)
        cardContent.append(content)

        return (this)
    }

}

MultiCard.prototype = {

    // TODO
    // Move sub cards to be at the edge of the cards opposed to opposite edge (Edge cases don't quite work yet)
    // SLIDE BACK (code there, might be inconsistencies with number of pixels in certain directions)
    // COULD CHANGE THE WIDTH OF SUBCARDS TO BE 1px LESS THAN MAIN
    // Error check if this.direction exists before making card (ie this.right cant make this.left)

    makeLeft: function (subWidth = "300px", title = null) {
        if (this.level==0){
            const left = document.createElement('left')
            this.left = new MultiCard(subWidth, this.height, title, undefined, this.level-1);
            this.left.card.className = "left";
            this.left.card.style.zIndex = this.left.level;
            this.left.card.style.left = "0px";
            this.left.card.style.top = "-1px";
            this.left.card.style.bottom = "0px";
            this.left.card.style.right = "0px";
            left.append(this.left.card)
            this.card.appendChild(left)
            this.left.right = this;
        } else {
            this.left = new MultiCard(subWidth, this.height, title, undefined, this.level-1);
            this.left.card.className = this.card.className+"-left";
            this.left.card.style.zIndex = this.left.level;
            this.left.card.style.left = this.card.style.left;
            this.left.card.style.top = this.card.style.top;
            this.left.card.style.bottom = this.card.style.bottom;
            this.left.card.style.right = this.card.style.right;
            this.card.parentElement.appendChild(this.left.card)
            this.left.right = this;
        }
    },

    makeRight: function (subWidth = "300px", title = null) {
        if (this.level==0){
            const right = document.createElement('right')
            this.right = new MultiCard(subWidth, this.height, title, undefined, this.level-1);
            this.right.card.className = "right";
            this.right.card.style.zIndex = this.right.level;
            this.right.card.style.right = "0px";
            this.right.card.style.top = "-1px";
            this.right.card.style.bottom = "0px"
            // this.right.card.style.left = "-1px"
            right.append(this.right.card)
            this.card.appendChild(right)
            this.right.left = this;
        } else {
            this.right = new MultiCard(subWidth, this.height, title, undefined, this.level-1);
            this.right.card.className = this.card.className+"-right";
            this.right.card.style.zIndex = this.right.level;
            this.right.card.style.right = this.card.style.right;
            this.right.card.style.top = this.card.style.top;
            this.right.card.style.bottom = this.card.style.bottom;
            // this.right.card.style.left = this.card.style.left;
            this.card.parentElement.appendChild(this.right.card)
            this.right.left = this;
        }
    },

    makeUp: function (subHeight = "150px", title = null) {
        if (this.level==0){
            const up = document.createElement('up')
            this.up = new MultiCard(this.width, subHeight, title, undefined, this.level-1);
            this.up.card.className = "up";
            this.up.card.style.zIndex = this.up.level;
            this.up.card.style.top = "0px";
            this.up.card.style.left = "-1px";
            this.up.card.style.right = "0px";
            this.up.card.style.bottom = "0px";
            
            up.append(this.up.card)
            this.card.appendChild(up)
            this.up.down = this;
        } else {
            this.up = new MultiCard(this.width, subHeight, title, undefined, this.level-1);
            this.up.card.className = this.card.className+"-up";
            this.up.card.style.zIndex = this.up.level;
            this.up.card.style.top = this.card.style.top;
            this.up.card.style.left = this.card.style.left;
            this.up.card.style.right = this.card.style.right;
            this.up.card.style.bottom = this.card.style.bottom;
            this.card.parentElement.appendChild(this.up.card)
            this.up.down = this;
        }
    },

    makeDown: function (subHeight = "150px", title = null) {
        // If top level, make first sublevel
        if (this.level==0){
            const down = document.createElement('down')
            this.down = new MultiCard(this.width, subHeight, title, undefined, this.level-1);
            this.down.card.className = "down";
            this.down.card.style.zIndex = this.down.level;
            this.down.card.style.left = "-1px";
            this.down.card.style.bottom = "0px";
            this.down.card.style.right = "0px";
            
            down.append(this.down.card)
            this.card.appendChild(down)
            this.down.up = this;
        } else { //Else, append to name and make new element
            this.down = new MultiCard(this.width, subHeight, title, undefined, this.level-1);
            this.down.card.className = this.card.className+"-down";
            this.down.card.style.zIndex = this.down.level;
            this.down.card.style.left = this.card.style.left;
            this.down.card.style.bottom = this.card.style.bottom;
            this.down.card.style.right = this.card.style.right;
            this.card.parentElement.appendChild(this.down.card)
            this.down.up = this;
        }

    },

    // Can shorten this to another function that just checks direction
    // HAVE CONDITIONAL FOR EVERYDIRECTION EXCEPT LEFT (I THINK MESSED UP BY LEFT -1 in the makes)
    slideLeft: function () {
        const mainOrSub = this.level == 0? this.card: this.card.parentElement
        if(!this.left.out){
            this.left.card.style.transition = "all 1s ease 0s, z-index 2000ms ease-in, opacity 1000ms linear, visibility 1000ms linear"
            for (let subCard of mainOrSub.querySelectorAll(`subcard[class^=${this.left.card.className}]`)){
                subCard.style.left = +subCard.style.left.slice(0,-2) - +subCard.style.width.slice(0,-2) + "px";
            }
            this.left.card.style.visibility = "visible"
            this.left.card.style.opacity = "1"
            // setTimeout(()=>{this.up.card.style.zIndex = "1"},600)
            this.left.card.style.zIndex = "1"
            this.left.out = true;
        } else {
            this.left.card.style.transition = "all 1s ease 0s, z-index 0ms ease-in, opacity 1000ms linear, visibility 1000ms linear"
            this.left.card.style.zIndex = this.left.level
            for (let subCard of mainOrSub.querySelectorAll(`subcard[class^=${this.left.card.className}]`)){
                subCard.style.left = +subCard.style.left.slice(0,-2) + +subCard.style.width.slice(0,-2) + "px";
            }
            // setTimeout(()=>{
                // this.left.card.style.visibility = "hidden"
                // this.left.card.style.opacity = "0"
            // },1000)
            this.left.out = false;
        }
    },
    slideRight: function () {
        const mainOrSub = this.level == 0? this.card: this.card.parentElement
        if(!this.right.out){
            this.right.card.style.transition = "all 1s ease 0s, z-index 2000ms ease-in, opacity 1000ms linear, visibility 1000ms linear"
            for (let subCard of mainOrSub.querySelectorAll(`subcard[class^=${this.right.card.className}]`)){
                // If left is negative (ie left of maincard, add to left, else subtract from to right)
                if (+subCard.style.left.slice(0,-2) < 0){
                    subCard.style.left= +subCard.style.left.slice(0,-2) + +subCard.style.height.slice(0,-2) + "px";
                } else {
                    subCard.style.right = +subCard.style.right.slice(0,-2) - +subCard.style.width.slice(0,-2) + "px";
                }
            }
            this.right.card.style.visibility = "visible"
            this.right.card.style.visibility = "visible"
            this.right.card.style.opacity = "1"
            // setTimeout(()=>{this.up.card.style.zIndex = "1"},600)
            this.right.out = true;
        } else {
            this.right.card.style.transition = "all 1s ease 0s, z-index 0ms ease-in, opacity 1000ms linear, visibility 1000ms linear"
            for (let subCard of mainOrSub.querySelectorAll(`subcard[class^=${this.right.card.className}]`)){
                // If right is negative (ie right to maincard, slide back by adding to right, else subtract from left)
                if(+subCard.style.right.slice(0,-2) < 0){
                    subCard.style.right = +subCard.style.right.slice(0,-2) + +subCard.style.width.slice(0,-2) + "px";
                } else {
                    subCard.style.left= +subCard.style.left.slice(0,-2) - +subCard.style.height.slice(0,-2) + "px";
                }
            }
            // setTimeout(()=>{
                this.right.card.style.visibility = "hidden"
                this.right.card.style.opacity = "0"
            // },1000)
            this.right.out = false;
        }
    },
    // ADD CONDITIONAL THAT CHECKS IF CURRENT POSITION HAS NEGATIVE TOP OR BOTTOM AND MOVE ACCORDIGNLY, GOING TO HAVE TO DO FOR LEFT-RIGHT TOO
    slideUp: function () {
        const mainOrSub = this.level == 0? this.card: this.card.parentElement
        if(!this.up.out){
            this.up.card.style.transition = "all 1s ease 0s, z-index 2000ms ease-in, opacity 1000ms linear, visibility 1000ms linear"
            for (let subCard of mainOrSub.querySelectorAll(`subcard[class^=${this.up.card.className}]`)){
                // If bottom is negative (ie below maincard, add to bottom, else subtract from to top)
                if(+subCard.style.bottom.slice(0,-2) < 0){
                    subCard.style.bottom= +subCard.style.bottom.slice(0,-2) + +subCard.style.height.slice(0,-2) + "px";
                } else {
                    subCard.style.top= +subCard.style.top.slice(0,-2) - +subCard.style.height.slice(0,-2) + "px";
                }
            }
            console.log(this.up.card)
            this.up.card.style.visibility = "visible"
            this.up.card.style.visibility = "visible"
            this.up.card.style.opacity = "1"
            // setTimeout(()=>{this.up.card.style.zIndex = "1"},600)
            this.up.out = true;
        } else {
            // this.up.card.style.zIndex = this.up.level
            // setTimeout(()=>{
                for (let subCard of mainOrSub.querySelectorAll(`subcard[class^=${this.up.card.className}]`)){
                    this.up.card.style.transition = "all 1s ease 0s, z-index 0ms ease-in, opacity 1000ms linear, visibility 1000ms linear"
                    // If top is negative (ie above maincard, slide back by adding to top, else subtract from bottom)
                    if(+subCard.style.top.slice(0,-2) < 0){
                        subCard.style.top= +subCard.style.top.slice(0,-2) + +subCard.style.height.slice(0,-2) + "px";
                    } else {
                        subCard.style.bottom= +subCard.style.bottom.slice(0,-2) - +subCard.style.height.slice(0,-2) + "px";
                    }
                }
                this.up.out = false;
                // setTimeout(()=>{
                    this.up.card.style.visibility = "hidden"
                    this.up.card.style.opacity = "0"
                // },1000)
            // },270)
        }
        
    },
    slideDown: function () {
        const mainOrSub = this.level == 0? this.card: this.card.parentElement
        if(!this.down.out){
            this.down.card.style.transition = "all 1s ease 0s, z-index 2000ms ease-in, opacity 1000ms linear, visibility 1000ms linear"
            for (let subCard of mainOrSub.querySelectorAll(`subcard[class^=${this.down.card.className}]`)){
                // If top is negative (ie above maincard, add to top, else subtract from top)
                if(+subCard.style.top.slice(0,-2) < 0){
                    subCard.style.top = +subCard.style.top.slice(0,-2) + +subCard.style.height.slice(0,-2) + "px";
                } else {
                    subCard.style.bottom = +subCard.style.bottom.slice(0,-2) - +subCard.style.height.slice(0,-2) + "px";
                }
                
            }
            this.down.card.style.visibility = "visible"
            this.down.card.style.visibility = "visible"
            this.down.card.style.opacity = "1"
            this.down.card.style.zIndex = "1"
            this.down.out = true;
        } else {
            this.down.card.style.transition = "all 1s ease 0s, z-index 0ms linear, opacity 1000ms linear, visibility 1000ms linear"
            this.down.card.style.zIndex = this.down.level
            for (let subCard of mainOrSub.querySelectorAll(`subcard[class^=${this.down.card.className}]`)){
                // If bottom is negative (ie below maincard, slide back by adding to bottom, else subtract from top)
                if(+subCard.style.bottom.slice(0,-2) < 0){
                    subCard.style.bottom= +subCard.style.bottom.slice(0,-2) + +subCard.style.height.slice(0,-2) + "px";
                } else {
                    subCard.style.top= +subCard.style.top.slice(0,-2) - +subCard.style.height.slice(0,-2) + "px";
                }
            }
            // setTimeout(()=>{
                // this.down.card.style.visibility = "hidden"
                // this.down.card.style.opacity = "0"
            // },1000)
            this.down.out = false;
        }
    },

    // Customize Card
    
}