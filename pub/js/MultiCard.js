"use strict";

// For subcards bigger than maincard, transition visibility on slide out (initial check for size: if bigger, set invisible)
// If logo needed, use russian nesting doll on a card
// Could change function parameters to json, just found this out on 04-14 lol

// RIGHT NOW, MakeUp and MakeDown have (subheight, subwidth) and MakeLeft and MakeRight have (subWidth, subHeight)

(function(global, document) { 

    function MultiCard(width = "300px", height = "150px", content = "", visible = true, level = 0) {

        this.width = width;
        this.height = height;
        this.level = level;
        this.visible = visible;

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

            // if (title != null){
            //     const header = document.createElement('div')
            //     header.style = `width: 100%; height: 25px; border-bottom: 1px solid lightgray; font-weight: bold;`
            //     card.appendChild(header)
            //     header.append(title)
            // }
        
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

            // if (title != null){
            //     const header = document.createElement('div')
            //     header.style = `width: 100%; height: 25px; border-bottom: 1px solid lightgray; font-weight: bold;`
            //     card.appendChild(header)
            //     header.append(title)
            // }
        
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

        makeLeft: function (subWidth, subHeight, visible = true) {
            makeCard(this, "left", subWidth, subHeight, visible, "0px", "0px", "-1px", "0px")
        },

        makeRight: function (subWidth, subHeight, visible = true) {
            makeCard(this, "right", subWidth, subHeight, visible, undefined, "0px", "-1px", "0px")
        },

        makeUp: function (subWidth, subHeight, visible = true) {
            makeCard(this, "up", subWidth, subHeight, visible, "-1px", "0px", "0px", "0px")
        },

        makeDown: function (subWidth, subHeight, visible = true) {
            makeCard(this, "down", subWidth, subHeight, visible, "-1px", "0px", undefined, "0px")
        },

        slideLeft: function () {
            slide(this, "left")
        },
        slideRight: function () {
            slide(this, "right")
        },
        slideUp: function () {
            slide(this, "up")
        },
        slideDown: function () {
            slide(this, "down")
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

        //Can Add More Future Card Templates
        cardTemplate: function(templateStyle) {
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
        deleteCard: function(deleteChildren = true) {
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
                
                getParentChildDirection("left", "right"); getParentChildDirection("right", "left"); getParentChildDirection("up", "down"); getParentChildDirection("down", "up")

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
                isParentOrChild("left", "right"); isParentOrChild("right", "left"); isParentOrChild("up", "down"); isParentOrChild("down", "up")

                // If more than one child, can't give multiple children properties of parent
                if (numberOfChildren > 1) return console.log("Cannot remove intersection card. Remove all but one of this card's subcards or remove all of its subcards.")
                
                // Weird Positioning if delete card while out
                // const mainOrSub = this.level == 0? this.card: this.card.parentElement
                // for (let subCard of mainOrSub.querySelectorAll(`subcard[class^=${this.card.className}]`)){
                //     subCard.style.left = this.card.style.left; 
                //     subCard.style.right = this.card.style.right; 
                //     subCard.style.top = this.card.style.top; 
                //     subCard.style.bottom = this.card.style.bottom
                // }

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

    const makeCard = (thisCard, passDirection, subWidth, subHeight, visible, left, right, top, bottom) => {
        let direction = passDirection; let opposite;
        switch(direction){
            case "left":
                opposite = "right";
                break;
            case "right":
                opposite = "left";
                break;
            case "up":
                opposite = "bottom"; 
                break;
            case "down":
                opposite = "top"; 
                break;
            default:
                break;
        }

        if (thisCard[direction]) return console.log(`${direction} subcard already exists`)

            // Sets dimensions to same as parent or custom
            let cardWidth = subWidth ? subWidth: thisCard.width
            let cardHeight = subHeight ? subHeight: thisCard.height
            //Check if parent card is visible
            let makeVisible
            if ((!thisCard.visible) || visible == false){
                makeVisible = false
            } // If subcard width or height greater than current card, make invisible
            if ((+thisCard.height.slice(0,-2) < +cardHeight.slice(0,-2) )||(+thisCard.width.slice(0,-2) < +cardWidth.slice(0,-2) )){
                makeVisible = false
            }

            if (thisCard.level==0){
                const appendDirection = document.createElement(`${direction}`)
                thisCard[direction] = new MultiCard(cardWidth, cardHeight, undefined, makeVisible, thisCard.level-1);
                thisCard[direction].card.className = `${direction}`;
                thisCard[direction].card.style.zIndex = thisCard[direction].level;
                if (left) thisCard[direction].card.style.left = left;
                if (right) thisCard[direction].card.style.right = right;
                if (top) thisCard[direction].card.style.top = top;
                if (bottom) thisCard[direction].card.style.bottom = bottom;
                
                appendDirection.append(thisCard[direction].card)
                thisCard.card.appendChild(appendDirection)
                thisCard[direction][opposite] = thisCard;
            } else {
                thisCard[direction] = new MultiCard(cardWidth, cardHeight, undefined, makeVisible, thisCard.level-1);
                thisCard[direction].card.className = thisCard.card.className+`-${direction}`;
                thisCard[direction].card.style.zIndex = thisCard[direction].level;
                thisCard[direction].card.style.top = thisCard.card.style.top;
                if (direction != "right") thisCard[direction].card.style.left = thisCard.card.style.left;
                thisCard[direction].card.style.right = thisCard.card.style.right;
                thisCard[direction].card.style.bottom = thisCard.card.style.bottom;
                thisCard.card.parentElement.appendChild(thisCard[direction].card)
                thisCard[direction][opposite] = thisCard;
            }

    }

    // Helper Functions
    const slide = (thisCard, passDirection) =>{
        if (!thisCard[passDirection]) return (console.log("This subcard does not exist"))
        const mainOrSub = thisCard.level == 0? thisCard.card: thisCard.card.parentElement
        let direction = passDirection; let opposite; let horizontal = true;
        let directionProperty;
        switch(direction){
            case "left":
                directionProperty = "left";
                opposite = "right";
                break;
            case "right":
                directionProperty = "right";
                opposite = "left";
                break;
            case "up":
                directionProperty = "top";
                opposite = "bottom"; 
                horizontal = false;
                break;
            case "down":
                directionProperty = "bottom";
                opposite = "top"; 
                horizontal = false;
                break;
            default:
                break;
        }

        let dimension = horizontal ? "width": "height"

        if(!thisCard[direction].out){
            thisCard[direction].card.style.transition = "all 1s ease 0s, z-index 2000ms ease-in, opacity 1100ms linear, visibility 1100ms linear"
            for (let subCard of mainOrSub.querySelectorAll(`subcard[class^=${thisCard[direction].card.className}]`)){
                if (+subCard.style[opposite].slice(0,-2) < 0){
                    subCard.style[opposite]= +subCard.style[opposite].slice(0,-2) + (+subCard.style[dimension].slice(0,-2) + 2) + "px";
                } else {
                    subCard.style[directionProperty] = +subCard.style[directionProperty].slice(0,-2) - (+subCard.style[dimension].slice(0,-2) + 2) + "px";
                }
            }
            thisCard[direction].card.style.visibility = "visible"
            thisCard[direction].card.style.opacity = "1"
            thisCard[direction].card.style.zIndex = "1"
            thisCard[direction].out = true;
        } else {
            thisCard[direction].card.style.transition = "all 1s ease 0s, z-index 0ms ease-in, opacity 1000ms linear, visibility 1000ms linear"
            thisCard[direction].card.style.zIndex = thisCard[direction].level
            for (let subCard of mainOrSub.querySelectorAll(`subcard[class^=${thisCard[direction].card.className}]`)){
                if(+subCard.style[directionProperty].slice(0,-2) < 0){
                    subCard.style[directionProperty] = +subCard.style[directionProperty].slice(0,-2) + (+subCard.style[dimension].slice(0,-2) + 2) + "px";
                } else {
                    subCard.style[opposite]= +subCard.style[opposite].slice(0,-2) - (+subCard.style[dimension].slice(0,-2) + 2) + "px";
                }
            }
            if (!thisCard[direction].visible) {
                thisCard[direction].card.style.visibility = "hidden"
                thisCard[direction].card.style.opacity = "0"
            }
            thisCard[direction].out = false;
        }
    }

    global.MultiCard = global.MultiCard || MultiCard

})(window, window.document);