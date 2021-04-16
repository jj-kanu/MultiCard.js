"use strict";

// Make Edit Content Card into a function, skips the document.querySelector etc.

// Title Card ======================================================================
// const titleHeader = document.createElement('div')
const titleCard = new MultiCard("455px", "95px", "MultiCard.js");
document.querySelector('#titleCard').appendChild(titleCard.card)
titleCard.editCardStyle("background-color",  "transparent")
titleCard.editCardStyle("border",  "none")
titleCard.editCardContent(undefined, 
    "text-align: center; font-family: 'Open Sans', sans-serif; font-size: 80px; font-weight: 700; background-color: transparent;")

// Subtitle
titleCard.makeDown("590px", "70px")
titleCard.down.editCardStyle("left",  "-70px")
titleCard.down.editCardStyle("background-color",  "transparent")
titleCard.down.editCardStyle("border",  "none")
titleCard.down.editCardContent("The Nesting Doll of Card Components", 
    "text-align: center; font-family: 'Open Sans', sans-serif; font-size: 33px; font-weight: 700; margin-top: 13px")
setTimeout(function() {titleCard.slideDown()}, 1000);

// API
titleCard.makeRight("80px",undefined,false)
const links = document.createElement('div')
const docLink = document.createElement('a')
docLink.href = "documentation.html"
docLink.style.color = "blue"
docLink.onmouseover = function(){docLink.style.color = "lightblue"};
docLink.onmouseout = function(){docLink.style.color = "blue"};
docLink.style.textDecoration = "none"
docLink.innerText = "(API)"
const exLink = document.createElement('a')
exLink.href = "examples.html"
exLink.style.color = "blue"
exLink.onmouseover = function(){exLink.style.color = "lightblue"};
exLink.onmouseout = function(){exLink.style.color = "blue"};
exLink.style.textDecoration = "none"
exLink.innerText = "(e.g.)"
links.appendChild(docLink)
links.appendChild(document.createElement('br'))
links.appendChild(exLink)
titleCard.right.editCardStyle("right",  "3px")
titleCard.right.editCardStyle("background-color",  "transparent")
titleCard.right.editCardStyle("border",  "none")
titleCard.right.editCardContent(links,
    "font-family: 'Open Sans', sans-serif; bottom: 1px; margin-top: 46px; font-weight: 600;")
setTimeout(function() {titleCard.slideRight()}, 1500);

// My Name
titleCard.makeUp(undefined, "20px", false)
titleCard.up.editCardStyle("background-color",  "transparent")
titleCard.up.editCardStyle("border",  "none")
const authored = document.createElement('span')
const authoredLink = document.createElement('a')
authoredLink.href = 'https://github.com/jj-kanu'
authoredLink.style.color = "blue"
authoredLink.onmouseover = function(){authoredLink.style.color = "lightblue"};
authoredLink.onmouseout = function(){authoredLink.style.color = "blue"};
authoredLink.textDecoration = "none"
authoredLink.target = "blank"
authoredLink.innerText = "JJ Kanu"
authored.appendChild(document.createTextNode("By: "))
authored.appendChild(authoredLink)

titleCard.up.editCardContent(authored, 
    "text-align: right; font-family: 'Open Sans', sans-serif; font-size: 20px; font-weight: 700; margin-top: 10px; margin-right: 21px")
document.querySelector('#titleCard').addEventListener("mouseover", () => {
    titleCard.slideUp();
}, false);
document.querySelector('#titleCard').addEventListener("mouseout", () => {
    titleCard.slideUp();
}, false);



// BUSINESS CARD ======================================================================

const tempContent = document.createElement('div')
tempContent.style = "margin-left: 25%"
tempContent.innerHTML = "<button>up</button><button>down</button><button onClick=cg.slideLeft()>left</button><button onClick=cg.slideRight()>right</button>";

const textContent = document.createElement('div')
textContent.style.color = "white"
textContent.style.fontFamily = "verdana"
textContent.style.paddingTop = "13%";

//Name
const myName = document.createElement('span')
myName.style.fontSize = "50px";
myName.style.marginLeft = "25%";
myName.innerText = "JJ Kanu"
textContent.appendChild((myName))

const businessCard = new MultiCard("400px", "200px", textContent);
document.querySelector('#businessCard').appendChild(businessCard.card)

businessCard.card.querySelector('.cardContent').style.backgroundImage = "url('https://cdnb.artstation.com/p/assets/images/images/023/818/911/large/alex-stem-geometric-wallpaper.jpg?1580426586')"

// Make SubCards
businessCard.makeUp(undefined, "30px");
businessCard.makeDown(undefined, "80px");
businessCard.makeLeft("140px");
businessCard.makeRight("149px");

// Buttons
const wrapper = document.createElement('div')
wrapper.style.marginTop = "20px"
wrapper.style.marginLeft = "10%"
// About
const about = document.createElement('span')
about.innerText = "About"
about.style.cursor = "pointer"
about.onclick = "businessCard.slideDown()"
about.addEventListener("click", function( event ) {
    businessCard.slideDown();
}, false);
wrapper.appendChild(about)

const filler = document.createElement('span')
filler.innerHTML = " | ";
wrapper.appendChild(filler)
// Contact Info
const conInfo = document.createElement('span')
conInfo.innerText = "Contact Info"
conInfo.style.cursor = "pointer"
conInfo.onclick = "businessCard.slideDown()"
conInfo.addEventListener("click", function( event ) {
    businessCard.slideLeft();
}, false);
wrapper.appendChild(conInfo)

const filler2 = document.createElement('span')
filler2.innerHTML = " | ";
wrapper.appendChild(filler2)
// Website
const website = document.createElement('span')
website.innerText = "Website"
website.style.cursor = "pointer"
website.onclick = "businessCard.slideDown()"
website.addEventListener("click", function( event ) {
    businessCard.slideUp();
}, false);
wrapper.appendChild(website)

const filler3 = document.createElement('span')
filler3.innerHTML = " | ";
wrapper.appendChild(filler3)

// skills
const skills = document.createElement('span')
skills.innerText = "Skills"
skills.style.cursor = "pointer"
skills.onclick = "businessCard.slideDown()"
skills.addEventListener("click", function( event ) {
    businessCard.slideRight();
}, false);
wrapper.appendChild(skills)

textContent.appendChild((wrapper))

// WEBSITE 
businessCard.up.card.style.backgroundColor = "#181818"
businessCard.up.card.querySelector('.cardContent').appendChild(document.createElement('a'))
businessCard.up.card.querySelector('.cardContent').style.textAlign = "center"
businessCard.up.card.querySelector('.cardContent').style.paddingTop = "4px"
businessCard.up.card.querySelector('a').href = "https://github.com/jj-kanu"
businessCard.up.card.querySelector('a').style.color = "white"
businessCard.up.card.querySelector('a').target = "blank"
businessCard.up.card.querySelector('a').appendChild(document.createTextNode("GitHub Profile"))  

// About Me Card
businessCard.down.card.style.backgroundColor = "#181818"
businessCard.down.card.querySelector('.cardContent').appendChild(document.createTextNode("Graduating UofT Student who is mediocre at making 'About Me' descriptions."))
businessCard.down.card.style.color = "white"  
businessCard.down.card.querySelector('.cardContent').style.paddingTop = "20px"
businessCard.down.card.querySelector('.cardContent').style.textAlign = "center"

// Skills 
businessCard.right.card.style.backgroundColor = "#181818"
businessCard.right.card.style.color = "white"  
businessCard.right.card.querySelector('.cardContent').style.paddingLeft = "10px"  
businessCard.right.card.querySelector('.cardContent').appendChild(document.createElement('br'))
businessCard.right.card.querySelector('.cardContent').appendChild(document.createTextNode("Hard Skills:"))
businessCard.right.card.querySelector('.cardContent').appendChild(document.createElement('br'))
businessCard.right.card.querySelector('.cardContent').appendChild(document.createTextNode("- Python"))
businessCard.right.card.querySelector('.cardContent').appendChild(document.createElement('br'))
businessCard.right.card.querySelector('.cardContent').appendChild(document.createTextNode("- JavaScript"))
businessCard.right.card.querySelector('.cardContent').appendChild(document.createElement('br'))
businessCard.right.card.querySelector('.cardContent').appendChild(document.createTextNode("- R"))
businessCard.right.card.querySelector('.cardContent').appendChild(document.createElement('br'))
businessCard.right.card.querySelector('.cardContent').appendChild(document.createElement('br'))
businessCard.right.card.querySelector('.cardContent').appendChild(document.createTextNode("Soft Skills:"))
businessCard.right.card.querySelector('.cardContent').appendChild(document.createElement('br'))
businessCard.right.card.querySelector('.cardContent').appendChild(document.createTextNode("- Strong Communication"))
businessCard.right.card.querySelector('.cardContent').appendChild(document.createElement('br'))
businessCard.right.card.querySelector('.cardContent').appendChild(document.createTextNode("- Team Player"))
businessCard.right.card.querySelector('.cardContent').appendChild(document.createElement('br'))


// Contact Info
businessCard.left.card.style.backgroundColor = "#181818"
businessCard.left.card.style.color = "white"  
businessCard.left.card.querySelector('.cardContent').style.paddingLeft = "10px"  
businessCard.left.card.querySelector('.cardContent').appendChild(document.createElement('br'))
businessCard.left.card.querySelector('.cardContent').appendChild(document.createTextNode("Email:"))
businessCard.left.card.querySelector('.cardContent').appendChild(document.createElement('br'))
businessCard.left.card.querySelector('.cardContent').appendChild(document.createTextNode("- jjk@notreal.com"))
businessCard.left.card.querySelector('.cardContent').appendChild(document.createElement('br'))
businessCard.left.card.querySelector('.cardContent').appendChild(document.createElement('br'))
businessCard.left.card.querySelector('.cardContent').appendChild(document.createTextNode("Phone Number: "))
businessCard.left.card.querySelector('.cardContent').appendChild(document.createElement('br'))
businessCard.left.card.querySelector('.cardContent').appendChild(document.createTextNode("- 647-555-6969"))
businessCard.left.card.querySelector('.cardContent').appendChild(document.createElement('br'))
businessCard.left.card.querySelector('.cardContent').appendChild(document.createElement('br'))
businessCard.left.card.querySelector('.cardContent').appendChild(document.createTextNode("LinkedIn: "))
businessCard.left.card.querySelector('.cardContent').appendChild(document.createElement('br'))
businessCard.left.card.querySelector('.cardContent').appendChild(document.createTextNode('- JJ Kanu'))


// ART PIECE ======================================================================
const snContainer = document.createElement('img')
snContainer.src = "https://www.vangoghgallery.com/img/starry_night_full.jpg"
snContainer.style.width = "100%"
snContainer.style.height = "100%"
const snCard = new MultiCard("320px","254px",snContainer)
document.querySelector('#starryNight').appendChild(snCard.card)

snCard.makeUp(undefined, "30px")
snCard.makeDown(undefined, "90px")

snContainer.addEventListener("mouseover", function( event ) {
    snCard.slideDown();
    snCard.slideUp();
}, false);
snContainer.addEventListener("mouseout", function( event ) {
    snCard.slideDown();
    snCard.slideUp();
}, false);

snCard.up.card.style.backgroundColor = "#181848"
snCard.up.card.style.color = "white"
snCard.up.card.style.textAlign = "center"
snCard.up.card.style.borderColor = "#4888C8"
snCard.down.card.style.backgroundColor = "#181848"
snCard.down.card.style.color = "white"
snCard.down.card.style.textAlign = "center"
snCard.down.card.style.borderColor = "#4888C8"

//Content
snCard.up.card.querySelector('.cardContent').style.paddingTop = "3px"
snCard.up.card.querySelector('.cardContent').appendChild(document.createTextNode("Starry Night ~ Vincent Van Gogh "))
snCard.down.card.querySelector('.cardContent').style.paddingTop = "5px"
snCard.down.card.querySelector('.cardContent').appendChild(document.createTextNode("Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an imaginary village."))


// Quiz Card (hint on right, answer on bottom) ======================================================================
const quizCard = new MultiCard("300px","200px", "What two cities in Japan were consecutive capitals?")
document.querySelector('#quizCard').appendChild(quizCard.card)
quizCard.card.style.backgroundColor = "#66ff66"
const hint = document.createElement('button')
hint.appendChild(document.createTextNode("Gimme A Hint!"))
const answer = document.createElement('button')
answer.appendChild(document.createTextNode("Just Tell Me!"))
quizCard.card.querySelector('.cardContent').style.fontSize = "20px"
quizCard.card.querySelector('.cardContent').style.paddingTop = "30px"
quizCard.card.querySelector('.cardContent').style.textAlign = "center"
quizCard.card.querySelector('.cardContent').appendChild(document.createElement('br'))
quizCard.card.querySelector('.cardContent').appendChild(document.createElement('br'))
quizCard.card.querySelector('.cardContent').appendChild(hint)
quizCard.card.querySelector('.cardContent').appendChild(answer)

quizCard.makeRight("150px")
quizCard.right.card.style.backgroundColor = "#99ff99"
quizCard.makeDown(undefined, "50px")
quizCard.down.card.style.backgroundColor = "#99ff99"

quizCard.right.card.querySelector('.cardContent').style.paddingLeft = "10px"  
quizCard.right.card.querySelector('.cardContent').appendChild(document.createTextNode("The cities are anagrams for each other in english."))
quizCard.right.card.querySelector('.cardContent').style.paddingTop = "30px"

quizCard.down.card.querySelector('.cardContent').appendChild(document.createTextNode("Kyoto and Tokyo"))
quizCard.down.card.querySelector('.cardContent').style.paddingTop = "15px"
quizCard.down.card.querySelector('.cardContent').style.paddingLeft = "30%"

hint.addEventListener("click", function( event ) {
    quizCard.slideRight()
}, false);
answer.addEventListener("click", function( event ) {
    quizCard.slideDown()
}, false);

// Crazy Card ======================================================================
const startPoint = new MultiCard(undefined, undefined, undefined, false)
document.querySelector('#crazyCard').appendChild(startPoint.card)
const crazyButton = document.createElement('button')
crazyButton.appendChild(document.createTextNode("Click Me!"))
crazyButton.style.marginLeft = "37%"
crazyButton.style.marginTop = "23%"
startPoint.card.querySelector('.cardContent').appendChild(crazyButton)

// Function to Label Subcards
const labelSubCard = (direction,fontSize,paddingTop) => {
    eval(`startPoint.${direction}.editCardContent("${direction}", "font-size:${fontSize}; padding-top:${paddingTop}; text-align:center;")`)
}

startPoint.card.style.backgroundColor = "#3399ff"
startPoint.makeDown()
startPoint.down.card.style.backgroundColor = "#66ccff"
labelSubCard("down", "30px", "45px")

startPoint.down.makeDown()
startPoint.down.down.card.style.backgroundColor = "#ccffff"
labelSubCard("down.down", "30px", "45px")

startPoint.down.down.makeRight()
startPoint.down.down.right.card.style.backgroundColor = "#ccffff"
labelSubCard("down.down.right", "25px", "45px")

startPoint.down.down.makeLeft()
startPoint.down.down.left.card.style.backgroundColor = "#ccffff"
labelSubCard("down.down.left", "25px", "45px")

startPoint.down.down.right.makeRight()
startPoint.down.down.right.right.card.style.backgroundColor = "#ccffff"
labelSubCard("down.down.right.right", "25px", "45px")

startPoint.down.down.left.makeLeft()
startPoint.down.down.left.left.card.style.backgroundColor = "#ccffff"
labelSubCard("down.down.left.left", "25px", "45px")

startPoint.down.down.right.right.makeUp()
startPoint.down.down.right.right.up.card.style.backgroundColor = "#66ccff"
labelSubCard("down.down.right.right.up", "25px", "45px")

startPoint.down.down.left.left.makeUp()
startPoint.down.down.left.left.up.card.style.backgroundColor = "#66ccff"
labelSubCard("down.down.left.left.up", "25px", "45px")

startPoint.down.down.right.right.up.makeUp()
startPoint.down.down.right.right.up.up.card.style.backgroundColor = "#3399ff"
labelSubCard("down.down.right.right.up.up", "25px", "45px")

startPoint.down.down.left.left.up.makeUp()
startPoint.down.down.left.left.up.up.card.style.backgroundColor = "#3399ff"
labelSubCard("down.down.left.left.up.up", "25px", "45px")

crazyButton.addEventListener("click", function( event ) {
    event.target.disabled = true;
    // Slide Out
    startPoint.slideDown();
    setTimeout(function() {startPoint.down.slideDown()}, 1000);
    setTimeout(function() {startPoint.down.down.slideRight()}, 2000);
    setTimeout(function() {startPoint.down.down.slideLeft()}, 2000);
    setTimeout(function() {startPoint.down.down.right.slideRight()}, 3000);
    setTimeout(function() {startPoint.down.down.left.slideLeft()}, 3000);
    setTimeout(function() {startPoint.down.down.right.right.slideUp()}, 4000);
    setTimeout(function() {startPoint.down.down.left.left.slideUp()}, 4000);
    setTimeout(function() {startPoint.down.down.right.right.up.slideUp()}, 5000);
    setTimeout(function() {startPoint.down.down.left.left.up.slideUp()}, 5000);
    // AND REVERSE
    setTimeout(function() {startPoint.down.down.right.right.up.slideUp()}, 6000);
    setTimeout(function() {startPoint.down.down.left.left.up.slideUp()}, 6000);
    setTimeout(function() {startPoint.down.down.right.right.slideUp()}, 7000);
    setTimeout(function() {startPoint.down.down.left.left.slideUp()}, 7000);
    setTimeout(function() {startPoint.down.down.right.slideRight()}, 8000);
    setTimeout(function() {startPoint.down.down.left.slideLeft()}, 8000);
    setTimeout(function() {startPoint.down.down.slideRight()}, 9000);
    setTimeout(function() {startPoint.down.down.slideLeft()}, 9000);
    setTimeout(function() {startPoint.down.slideDown()}, 10000);
    setTimeout(function() {startPoint.slideDown()}, 11000);

    setTimeout(function() {event.target.disabled = false;}, 12000);
}, false);

//TESTING
// Testing delete all children, pointer stil exists
// startPoint.deleteCard(true)

// Testing don't delete all children
// startPoint.down.down.right.deleteCard(false)
// console.log(startPoint.down.down.card)