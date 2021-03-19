"use strict";

//Current Limitation: Rest of page zindex must be lower than lowest cards z-index

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
                background-color: white; border: 1px solid lightgray;
                transition: all 2s ease 0s; display: inline-block;`

        if (title != null){
            const header = document.createElement('div')
            header.style = `width: 100%; height: 25px; border-bottom: 1px solid lightgray; font-weight: bold;`
            card.appendChild(header)
            header.append(title)
        }
    
        //Card Content
        const cardContent = document.createElement('div')
        cardContent.style = `width: 100%; height: ${this.height};`
        card.appendChild(cardContent)
        cardContent.append(content)
        
        // document.querySelector('#testDiv').appendChild(card)
        // return (this.card)
    } else {
        this.card = document.createElement('SubCard')
        const card = this.card

        card.style = `position:absolute; width: ${this.width}; height: ${this.height}; 
                background-color: white; border: 1px solid lightgray;
                transition: all 2s ease 0s; display: inline-block;` 

        if (title != null){
            const header = document.createElement('div')
            header.style = `width: 100%; height: 25px; border-bottom: 1px solid lightgray; font-weight: bold;`
            card.appendChild(header)
            header.append(title)
        }
    
        //Card Content
        const cardContent = document.createElement('div')
        cardContent.style = `width: 100%; height: ${this.height};`
        card.appendChild(cardContent)
        cardContent.append(content)

        return (this)
    }

}

MultiCard.prototype = {

    // TODO
    // Move sub cards to be at the edge of the cards opposed to opposite edge
    // SLIDE BACK IN
    // Error check if this.direction exists before making card (ie this.right cant make this.left)

    makeLeft: function (subWidth = "300px", title = null) {
        if (this.level==0){
            const left = document.createElement('left')
            this.left = new MultiCard(subWidth, this.height, title, null, this.level-1);
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
            this.left = new MultiCard(subWidth, this.height, title, null, this.level-1);
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
            this.right = new MultiCard(subWidth, this.height, title, null, this.level-1);
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
            this.right = new MultiCard(subWidth, this.height, title, null, this.level-1);
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
            this.up = new MultiCard(this.width, subHeight, title, null, this.level-1);
            this.down.card.className = "up";
            this.up.card.style.zIndex = this.up.level;
            this.up.card.style.top = "0px";
            this.up.card.style.left = "0px";
            this.up.card.style.right = "0px";
            this.up.card.style.bottom = "0px";
            
            up.append(this.up.card)
            this.card.appendChild(up)
            this.up.down = this;
        } else {
            this.up = new MultiCard(this.width, subHeight, title, null, this.level-1);
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
            this.down = new MultiCard(this.width, subHeight, title, null, this.level-1);
            this.down.card.className = "down";
            this.down.card.style.zIndex = this.down.level;
            this.down.card.style.left = "-1px";
            this.down.card.style.bottom = "0px";
            this.down.card.style.right = "0px";
            
            down.append(this.down.card)
            this.card.appendChild(down)
            this.down.up = this;
        } else { //Else, append to name and make new element
            this.down = new MultiCard(this.width, subHeight, title, null, this.level-1);
            this.down.card.className = this.card.className+"-down";
            this.down.card.style.zIndex = this.down.level;
            this.down.card.style.left = this.card.style.left;
            this.down.card.style.bottom = this.card.style.bottom;
            this.down.card.style.right = this.card.style.right;
            this.card.parentElement.appendChild(this.down.card)
            this.down.up = this;
        }

    },

    slideLeft: function () {
        if (this.level==0){
            for (let subCard of this.card.querySelectorAll(`subcard[class^=${this.left.card.className}]`)){
                subCard.style.left = +subCard.style.left.slice(0,-2) - +subCard.style.width.slice(0,-2) -2 + "px";
            }
        } else {
            for (let subCard of this.card.parentElement.querySelectorAll(`subcard[class^=${this.left.card.className}]`)){
                subCard.style.left = +subCard.style.left.slice(0,-2) - +subCard.style.width.slice(0,-2) -2 + "px";
            }
        }
    },
    slideRight: function () {
        // Move all subcards with same class prefix as current card's down's classname
        if (this.level==0){
            for (let subCard of this.card.querySelectorAll(`subcard[class^=${this.right.card.className}]`)){
                subCard.style.right = +subCard.style.right.slice(0,-2) - +subCard.style.width.slice(0,-2) - 2 + "px";
            }
        } else {
            for (let subCard of this.card.parentElement.querySelectorAll(`subcard[class^=${this.right.card.className}]`)){
                // {subCard.style.right == ""? subCard.style.right="0px": null}
                // log(subCard.style.right)
                subCard.style.right = +subCard.style.right.slice(0,-2) - +subCard.style.width.slice(0,-2) - 2 + "px";
            }
        }
    },
    slideUp: function () {
        if (this.level==0){
            for (let subCard of this.card.querySelectorAll(`subcard[class^=${this.up.card.className}]`)){
                subCard.style.top= +subCard.style.top.slice(0,-2) - +subCard.style.height.slice(0,-2) - 2 + "px";
            }
        } else {
            for (let subCard of this.card.parentElement.querySelectorAll(`subcard[class^=${this.up.card.className}]`)){
                subCard.style.top= +subCard.style.top.slice(0,-2) - +subCard.style.height.slice(0,-2) - 2 + "px";
            }
        }
    },
    slideDown: function () {
        if (this.level==0){
            for (let subCard of this.card.querySelectorAll(`subcard[class^=${this.down.card.className}]`)){
                subCard.style.bottom = +subCard.style.bottom.slice(0,-2) - +subCard.style.height.slice(0,-2) - 2 + "px";
            }
        } else {
            for (let subCard of this.card.parentElement.querySelectorAll(`subcard[class^=${this.down.card.className}]`)){
                subCard.style.bottom = +subCard.style.bottom.slice(0,-2) - +subCard.style.height.slice(0,-2) - 2 + "px";
            }
        }
    },
}