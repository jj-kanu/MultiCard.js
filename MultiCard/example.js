"use strict";

// const e = $('#testDiv')
// log(e.text())
// log("my ass")

const tempContent = document.createElement('div')
tempContent.style = "margin-left: 25%"
tempContent.innerHTML = "<button>up</button><button>down</button><button onClick=cg.slideLeft()>left</button><button onClick=cg.slideRight()>right</button>";

// Test MultiCard
const cg = new MultiCard(undefined, undefined, undefined, tempContent);
log(cg)
document.querySelector('#testDiv').appendChild(cg.card)
cg.makeRight("150px","test");
cg.makeLeft();
cg.makeDown();
log(cg.down)
cg.down.makeDown();
cg.down.down.makeRight();
log(cg.down.down)
// setTimeout(function() {cg.slideRight()}, 2000);
// setTimeout(function() {cg.slideLeft()}, 2000);
setTimeout(function() {cg.slideDown()}, 2000);
setTimeout(function() {cg.down.slideDown(), log("sliddown")}, 4000);
log(cg.down.down)
setTimeout(function() {cg.down.down.slideRight()}, 6000);
// cg.left.height = "300px"

// Business Card

// Actual Text in card
const textContent = document.createElement('div')
textContent.style.color = "white"
textContent.style.fontFamily = "verdana"
textContent.style.paddingTop = "13%";
// textContent.innerHTML = "<strong style=font-size:40px>JJ Kanu</strong> <br> <span className='bCardButton' onClick=businessCard.slideDown()>About</span> | <span onClick=businessCard.slideLeft()>Contact Info</span> | <span onClick=businessCard.slideUp()>Website</span> | <span onClick=businessCard.slideRight()>Skills</span>";

//Name
const myName = document.createElement('span')
myName.style.fontSize = "50px";
myName.style.marginLeft = "25%";
myName.innerText = "JJ Kanu"
textContent.appendChild((myName))

const businessCard = new MultiCard("400px", "200px", null, textContent);
document.querySelector('#businessCard').appendChild(businessCard.card)

businessCard.card.querySelector('.cardContent').style.backgroundImage = "url('https://cdnb.artstation.com/p/assets/images/images/023/818/911/large/alex-stem-geometric-wallpaper.jpg?1580426586')"

// Make SubCards
businessCard.makeUp("30px");
businessCard.makeDown("80px");
businessCard.makeLeft("149px");
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

// WEBSITE  // MAYBE TURN THIS FIRST LINE INTO A FUNCTION FOR SETTING THEME
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