"use strict";

// For subcards bigger than maincard, transition visibility on slide out (initial check for size: if bigger, set invisible)
// If logo needed, use russian nesting doll on a card
// Could change function parameters to json, just found this out on 04-14 lol

// RIGHT NOW, MakeUp and MakeDown have (subheight, subwidth) and MakeLeft and MakeRight have (subWidth, subHeight)

function MultiCard(width = "300px", height = "150px", title = "Title", content = "", level = 0, visible = true) {

    this.width = width;
    this.height = height;
    this.level = level;

    // Sub-Cards
    this.left;
    this.right;
    this.up;
    this.down; 
    
    if (this.level==0){
        this.card = document.createElement('MultiCard')
        const card = this.card

        card.style = `position:relative; width: ${this.width}; height: ${this.height}; 
                background-color: white; 
                border: 1px solid lightgray;
                transition: all 1s ease 0s; display: inline-block;`

        if (title != null){
            const header = document.createElement('div')
            header.style = `width: 100%; height: 25px; border-bottom: 1px solid lightgray; font-weight: bold;`
            card.appendChild(header)
            header.append(title)
        }
    
        //Card Content
        this.cardContent = document.createElement('div');
        const cardContent = this.cardContent
        cardContent.className = "cardContent";
        cardContent.style = `width: 100%; height: ${this.height};`
        card.appendChild(cardContent)
        cardContent.append(content)
        
    } else {

        //Checks if subcard is in or out
        this.out = false;
        // Sets Subcard visibility. if visible is false, current subcard and its children will be invisible and fade in
        this.visible = visible;

        this.card = document.createElement('SubCard')
        const card = this.card

        card.style = `position:absolute; width: ${this.width}; height: ${this.height}; 
                background-color: white; 
                border: 1px solid lightgray;
                display: inline-block;
                transition: all 1s ease 0s, z-index 2000ms ease-in, opacity 1000ms linear, visibility 1000ms linear;`
                
                // Add invisibility
                if (!this.visible) {
                    card.style.visibility = "hidden"
                    card.style.opacity = 0
                }

        if (title != null){
            const header = document.createElement('div')
            header.style = `width: 100%; height: 25px; border-bottom: 1px solid lightgray; font-weight: bold;`
            card.appendChild(header)
            header.append(title)
        }
    
        //Card Content
        this.cardContent = document.createElement('div');
        const cardContent = this.cardContent
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

    makeLeft: function (subWidth, subHeight, title = null, visible = true) {

        if (this.left) return console.log("Left subcard already exists")

        // Sets dimensions to same as parent or custom
        let cardWidth = subWidth ? subWidth: this.width
        let cardHeight = subHeight ? subHeight: this.height
        //Check if parent card is visible
        let makeVisible
        if ((this.level < 0 && !this.visible) || visible == false){
            makeVisible = false
        } // If subcard width or height greater than current card, make invisible
        if ((+this.height.slice(0,-2) < +cardHeight.slice(0,-2) )||(+this.width.slice(0,-2) < +cardWidth.slice(0,-2) )){
            makeVisible = false
        }

        if (this.level==0){
            const left = document.createElement('left')
            this.left = new MultiCard(cardWidth, cardHeight, title, undefined, this.level-1, makeVisible);
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
            this.left = new MultiCard(cardWidth, cardHeight, title, undefined, this.level-1, makeVisible);
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

    makeRight: function (subWidth, subHeight, title = null, visible = true) {

        if (this.right) return console.log("Right subcard already exists")

        // Sets dimensions to same as parent or custom
        let cardWidth = subWidth ? subWidth: this.width
        let cardHeight = subHeight ? subHeight: this.height
        //Check if parent card is visible
        let makeVisible
        if ((this.level < 0 && !this.visible) || visible == false){
            makeVisible = false
        } // If subcard width or height greater than current card, make invisible
        if ((+this.height.slice(0,-2) < +cardHeight.slice(0,-2) )||(+this.width.slice(0,-2) < +cardWidth.slice(0,-2) )){
            makeVisible = false
        }

        if (this.level==0){
            const right = document.createElement('right')
            this.right = new MultiCard(cardWidth, cardHeight, title, undefined, this.level-1, makeVisible);
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
            this.right = new MultiCard(cardWidth, cardHeight, title, undefined, this.level-1, makeVisible);
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

    makeUp: function (subWidth, subHeight, title = null, visible = true) {

        if (this.up) return console.log("Up subcard already exists")

        // Sets dimensions to same as parent or custom
        let cardWidth = subWidth ? subWidth: this.width
        let cardHeight = subHeight ? subHeight: this.height
        //Check if parent card is visible
        let makeVisible
        if ((this.level < 0 && !this.visible) || visible == false){
            makeVisible = false
        } // If subcard width or height greater than current card, make invisible
        if ((+this.height.slice(0,-2) < +cardHeight.slice(0,-2) )||(+this.width.slice(0,-2) < +cardWidth.slice(0,-2) )){
            makeVisible = false
        }

        if (this.level==0){
            const up = document.createElement('up')
            this.up = new MultiCard(cardWidth, cardHeight, title, undefined, this.level-1, makeVisible);
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
            this.up = new MultiCard(cardWidth, cardHeight, title, undefined, this.level-1, makeVisible);
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

    makeDown: function (subWidth, subHeight, title = null, visible = true) {

        if (this.down) return console.log("Down subcard already exists")

        // Sets dimensions to same as parent or custom
        let cardWidth = subWidth ? subWidth: this.width
        let cardHeight = subHeight ? subHeight: this.height
        //Check if parent card is visible
        let makeVisible
        if ((this.level < 0 && !this.visible) || visible == false){
            makeVisible = false
        } // If subcard width or height greater than current card, make invisible
        if ((+this.height.slice(0,-2) < +cardHeight.slice(0,-2) )||(+this.width.slice(0,-2) < +cardWidth.slice(0,-2) )){
            makeVisible = false
        }

        // If top level, make first sublevel
        if (this.level==0){
            const down = document.createElement('down')
            this.down = new MultiCard(cardWidth, cardHeight, title, undefined, this.level-1, makeVisible);
            this.down.card.className = "down";
            this.down.card.style.zIndex = this.down.level;
            this.down.card.style.left = "-1px";
            this.down.card.style.bottom = "0px";
            this.down.card.style.right = "0px";
            
            down.append(this.down.card)
            this.card.appendChild(down)
            this.down.up = this;
        } else { //Else, append to name and make new element
            this.down = new MultiCard(cardWidth, cardHeight, title, undefined, this.level-1, makeVisible);
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
    // LEFT MISSING CHECKS THAT OTHER DIRECTIONS HAVE
    // HAVE CONDITIONAL FOR EVERYDIRECTION EXCEPT LEFT (I THINK MESSED UP BY LEFT -1 in the makes)
    slideLeft: function () {
        const mainOrSub = this.level == 0? this.card: this.card.parentElement
        if(!this.left.out){
            this.left.card.style.transition = "all 1s ease 0s, z-index 2000ms ease-in, opacity 1100ms linear, visibility 1100ms linear"
            for (let subCard of mainOrSub.querySelectorAll(`subcard[class^=${this.left.card.className}]`)){
                // If left is negative (ie left of maincard, add to left, else subtract from to right)
                if (+subCard.style.right.slice(0,-2) < 0){
                    subCard.style.right= +subCard.style.right.slice(0,-2) + (+subCard.style.width.slice(0,-2) + 2) + "px";
                } else {
                    subCard.style.left = +subCard.style.left.slice(0,-2) - (+subCard.style.width.slice(0,-2) + 2) + "px";
                }
            }
            this.left.card.style.visibility = "visible"
            this.left.card.style.opacity = "1"
            this.left.card.style.zIndex = "1"
            this.left.out = true;
        } else {
            this.left.card.style.transition = "all 1s ease 0s, z-index 0ms ease-in, opacity 1000ms linear, visibility 1000ms linear"
            this.left.card.style.zIndex = this.left.level
            for (let subCard of mainOrSub.querySelectorAll(`subcard[class^=${this.left.card.className}]`)){
                // If right is negative (ie right to maincard, slide back by adding to right, else subtract from left)
                if(+subCard.style.left.slice(0,-2) < 0){
                    subCard.style.left = +subCard.style.left.slice(0,-2) + (+subCard.style.width.slice(0,-2) + 2) + "px";
                } else {
                    subCard.style.right= +subCard.style.right.slice(0,-2) - (+subCard.style.width.slice(0,-2) + 2) + "px";
                }
            }
            if (!this.left.visible) {
                this.left.card.style.visibility = "hidden"
                this.left.card.style.opacity = "0"
            }
            this.left.out = false;
        }
    },
    slideRight: function () {
        const mainOrSub = this.level == 0? this.card: this.card.parentElement
        if(!this.right.out){
            this.right.card.style.transition = "all 1s ease 0s, z-index 2000ms ease-in, opacity 1100ms linear, visibility 1100ms linear"
            for (let subCard of mainOrSub.querySelectorAll(`subcard[class^=${this.right.card.className}]`)){
                // If left is negative (ie left of maincard, add to left, else subtract from to right)
                if (+subCard.style.left.slice(0,-2) < 0){
                    subCard.style.left= +subCard.style.left.slice(0,-2) + (+subCard.style.width.slice(0,-2) + 2) + "px";
                } else {
                    subCard.style.right = +subCard.style.right.slice(0,-2) - (+subCard.style.width.slice(0,-2) + 2) + "px";
                }
            }
            this.right.card.style.visibility = "visible"
            this.right.card.style.opacity = "1"
            this.right.card.style.zIndex = "1"
            this.right.out = true;
        } else {
            this.right.card.style.transition = "all 1s ease 0s, z-index 0ms ease-in, opacity 1000ms linear, visibility 1000ms linear"
            this.right.card.style.zIndex = this.right.level
            for (let subCard of mainOrSub.querySelectorAll(`subcard[class^=${this.right.card.className}]`)){
                // If right is negative (ie right to maincard, slide back by adding to right, else subtract from left)
                if(+subCard.style.right.slice(0,-2) < 0){
                    subCard.style.right = +subCard.style.right.slice(0,-2) + (+subCard.style.width.slice(0,-2) + 2) + "px";
                } else {
                    subCard.style.left= +subCard.style.left.slice(0,-2) - (+subCard.style.width.slice(0,-2) + 2) + "px";
                }
            }
            if (!this.right.visible) {
                this.right.card.style.visibility = "hidden"
                this.right.card.style.opacity = "0"
            }
            this.right.out = false;
        }
    },
    slideUp: function () {
        const mainOrSub = this.level == 0? this.card: this.card.parentElement
        if(!this.up.out){
            this.up.card.style.transition = "all 1s ease 0s, z-index 2000ms ease-in, opacity 1100ms linear, visibility 1100ms linear"
            for (let subCard of mainOrSub.querySelectorAll(`subcard[class^=${this.up.card.className}]`)){
                // If bottom is negative (ie below maincard, add to bottom, else subtract from to top)
                if(+subCard.style.bottom.slice(0,-2) < 0){
                    subCard.style.bottom= +subCard.style.bottom.slice(0,-2) + (+subCard.style.height.slice(0,-2) + 2) + "px";
                } else {
                    subCard.style.top= +subCard.style.top.slice(0,-2) - (+subCard.style.height.slice(0,-2) + 2) + "px";
                }
            }
            this.up.card.style.visibility = "visible"
            this.up.card.style.opacity = "1"
            this.up.card.style.zIndex = "1"
            this.up.out = true;
        } else {
            this.up.card.style.transition = "all 1s ease 0s, z-index 0ms ease-in, opacity 1000ms linear, visibility 1000ms linear"
            this.up.card.style.zIndex = this.up.level
                for (let subCard of mainOrSub.querySelectorAll(`subcard[class^=${this.up.card.className}]`)){
                    // If top is negative (ie above maincard, slide back by adding to top, else subtract from bottom)
                    if(+subCard.style.top.slice(0,-2) < 0){
                        subCard.style.top= +subCard.style.top.slice(0,-2) + (+subCard.style.height.slice(0,-2) + 2) + "px";
                    } else {
                        subCard.style.bottom= +subCard.style.bottom.slice(0,-2) - (+subCard.style.height.slice(0,-2) + 2) + "px";
                    }
                }
                if (!this.up.visible) {
                    this.up.card.style.visibility = "hidden"
                    this.up.card.style.opacity = "0"
                }
                this.up.out = false;
        }
        
    },
    slideDown: function () {
        const mainOrSub = this.level == 0? this.card: this.card.parentElement
        if(!this.down.out){
            this.down.card.style.transition = "all 1s ease 0s, z-index 2000ms ease-in, opacity 1100ms linear, visibility 1100ms linear"
            for (let subCard of mainOrSub.querySelectorAll(`subcard[class^=${this.down.card.className}]`)){
                // If top is negative (ie above maincard, add to top, else subtract from top)
                if(+subCard.style.top.slice(0,-2) < 0){
                    subCard.style.top = +subCard.style.top.slice(0,-2) + (+subCard.style.height.slice(0,-2) + 2) + "px";
                } else {
                    subCard.style.bottom = +subCard.style.bottom.slice(0,-2) - (+subCard.style.height.slice(0,-2) + 2)  + "px";
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
                    subCard.style.bottom= +subCard.style.bottom.slice(0,-2) + (+subCard.style.height.slice(0,-2) + 2) + "px";
                } else {
                    subCard.style.top= +subCard.style.top.slice(0,-2) - (+subCard.style.height.slice(0,-2) + 2) + "px";
                }
            }
            if (!this.down.visible) {
                this.down.card.style.visibility = "hidden"
                this.down.card.style.opacity = "0"
            }
            this.down.out = false;
        }
    },

    // Customize Card Content
     editCardContent: function(content, contentStyle){
        if (contentStyle) this.cardContent.style = contentStyle
        if (content) {
            if (typeof content == 'string') this.cardContent.appendChild(document.createTextNode(content))
            else this.cardContent.appendChild(content)
        }
    },

    // Customize Card Style Single
    editCardStyle: function(styleProperty, edit, append=false) {
        if (!append || !this.card.style[styleProperty]) this.card.style[styleProperty] = edit
        else{
            let curStyle = String(this.card.style[styleProperty]) + ", " + edit
            this.card.style[styleProperty] = curStyle
        }
    },

    // Idk if I can concat to style so if i do this its a full replace
    // // Customize Card Style Full
    // editCardStyleFull: function(edit, append=false) {
    //     if (!append) this.card.style[styleProperty] = edit
    //     else{
    //         let curStyle = String(this.card.style[styleProperty]) + ", " + edit
    //         this.card.style[styleProperty] = curStyle
    //     }
    // },

    // Delete. Cannot Delete Intersection Cards (ie more than one subcard). Child takes position of parent
    // Can delete all subcards ooorrrrr have child take property of parent
    deleteCard: function(deleteChildren) {
        // Removes Cards from DOM, references still exists at top level
        if (deleteChildren == true){
            // Delete Main Card
            if(this.level==0) this.card.remove()

            // Get directions of parent, remove parent pointer
            let child; let parent;
            const getParentChildDirection = (direction, opposite) =>{
                if (this[direction]){
                    if(this[direction].level > this.level) {
                        parent = direction; child = opposite
                    }
                }
            }
            getParentChildDirection("left", "right")
            getParentChildDirection("right", "left")
            getParentChildDirection("up", "down")
            getParentChildDirection("down", "up")

            if(this.level==-1) {
                delete this[parent][child]
                this.card.parentElement.remove()
            }
            if(this.level < -1){
                // Remove all children of subcards with same prefix
                for (let subCard of this.card.parentElement.querySelectorAll(`subcard[class^=${this.card.className}]`)){
                    subCard.remove()
                }
                delete this[parent][child]
            }
        }
        // Removes Card from DOM, references change
        if (deleteChildren == false) {
            let numberOfChildren = 0
            let child; let parent; let directionRelativeToParent; let directionRelativeToChild
            // Checks if level of direction is lower. If so, its a child, if higher than parent
            const isParentOrChild = (direction, opposite) =>{
                if (this[direction]){
                    if(this[direction].level < this.level) {
                        numberOfChildren = numberOfChildren +  1; child = direction; directionRelativeToChild = opposite
                    } else {parent = direction; directionRelativeToParent = opposite}
                }
            }
            isParentOrChild("left", "right")
            isParentOrChild("right", "left")
            isParentOrChild("up", "down")
            isParentOrChild("down", "up")

            // If more than one child, can't give multiple children properties of parent
            if (numberOfChildren > 1) return console.log("Cannot remove intersection card. Remove all but one of this card's subcards or remove all of its subcards.")
            
            // Moves positioning of child card to current card.
            this[child].card.style.left = this.card.style.left; 
            this[child].card.style.right = this.card.style.right; 
            this[child].card.style.top = this.card.style.top; 
            this[child].card.style.bottom = this.card.style.bottom
            // Points parent subcard to grandchild, and vice versa
            this[parent][directionRelativeToParent] = this[child]
            this[child][directionRelativeToChild] = this[parent]
            // Removes current card from DOM
            this.card.remove()
        }
    }
}