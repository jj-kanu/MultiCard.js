// Title Card ======================================================================
const titleCard = new MultiCard("455px", "95px", "MultiCard.js");
document.querySelector('#titleCard').appendChild(titleCard.card)
titleCard.editCardStyle("background-color",  "transparent")
// titleCard.editCardStyle("border",  "none")
titleCard.editCardContent(undefined, 
    "text-align: center; font-family: 'Open Sans', sans-serif; font-size: 80px; font-weight: 700; background-color: transparent;")

// Subtitle
titleCard.makeDown("590px", "70px")
titleCard.down.editCardStyle("left",  "-70px")
titleCard.down.editCardStyle("background-color",  "transparent")
// titleCard.down.editCardStyle("border",  "none")
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
// titleCard.right.editCardStyle("border",  "none")
titleCard.right.editCardContent(links,
    "font-family: 'Open Sans', sans-serif; bottom: 1px; margin-top: 46px; font-weight: 600;")
setTimeout(function() {titleCard.slideRight()}, 1500);

// My Name
titleCard.makeUp(undefined, "20px", false)
titleCard.up.editCardStyle("background-color",  "transparent")
// titleCard.up.editCardStyle("border",  "none")
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

// Title Card Codeblock ======================================================================
const titleBlock = new MultiCard("950px", "312px");
document.querySelector('#titleBlock').appendChild(titleBlock.card)
const codeBlockContainer = document.createElement('div')
codeBlockContainer.className = "codeBlock"

codeBlockContainer.innerHTML = `const titleCard = new MultiCard("455px", "95px", "MultiCard.js");
    document.querySelector('#titleCard').appendChild(titleCard.card) <br>
    titleCard.editCardStyle("background-color",  "transparent") <br>
    // titleCard.editCardStyle("border",  "none") <br>
    titleCard.editCardContent(undefined, <br>
        "text-align: center; font-family: 'Open Sans', sans-serif; font-size: 80px; font-weight: 700; background-color: transparent;")<br>
        <br>
    // Subtitle<br>
    titleCard.makeDown("590px", "70px")<br>
    titleCard.down.editCardStyle("left",  "-70px")<br>
    titleCard.down.editCardStyle("background-color",  "transparent")<br>
    // titleCard.down.editCardStyle("border",  "none")<br>
    titleCard.down.editCardContent("The Nesting Doll of Card Components", <br>
        "text-align: center; font-family: 'Open Sans', sans-serif; font-size: 33px; font-weight: 700; margin-top: 13px")<br>
    setTimeout(function() {titleCard.slideDown()}, 1000);<br>...`

titleBlock.editCardContent(codeBlockContainer)
titleBlock.editCardStyle("border", "none")

titleBlock.makeDown(undefined, "907px")
const codeBlockContainerExpand = document.createElement('div')
codeBlockContainerExpand.className = "codeBlock"
codeBlockContainerExpand.innerHTML = `// API<br>
    titleCard.makeRight("80px",undefined,false)<br>
    const links = document.createElement('div')<br>
    const docLink = document.createElement('a')<br>
    docLink.href = "documentation.html"<br>
    docLink.style.color = "blue"<br>
    docLink.onmouseover = function(){docLink.style.color = "lightblue"};<br>
    docLink.onmouseout = function(){docLink.style.color = "blue"};<br>
    docLink.style.textDecoration = "none"<br>
    docLink.innerText = "(API)"<br>
    const exLink = document.createElement('a')<br>
    exLink.href = "examples.html"<br>
    exLink.style.color = "blue"<br>
    exLink.onmouseover = function(){exLink.style.color = "lightblue"};<br>
    exLink.onmouseout = function(){exLink.style.color = "blue"};<br>
    exLink.style.textDecoration = "none"<br>
    exLink.innerText = "(e.g.)"<br>
    links.appendChild(docLink)<br>
    links.appendChild(document.createElement('br'))<br>
    links.appendChild(exLink)<br>
    titleCard.right.editCardStyle("right",  "3px")<br>
    titleCard.right.editCardStyle("background-color",  "transparent")<br>
    // titleCard.right.editCardStyle("border",  "none")<br>
    titleCard.right.editCardContent(links,<br>
        "font-family: 'Open Sans', sans-serif; bottom: 1px; margin-top: 46px; font-weight: 600;")<br>
    setTimeout(function() {titleCard.slideRight()}, 1500);<br>
    <br>
    // My Name<br>
    titleCard.makeUp(undefined, "20px", false)<br>
    titleCard.up.editCardStyle("background-color",  "transparent")<br>
    // titleCard.up.editCardStyle("border",  "none")<br>
    const authored = document.createElement('span')<br>
    const authoredLink = document.createElement('a')<br>
    authoredLink.href = 'https://github.com/jj-kanu'<br>
    authoredLink.style.color = "blue"<br>
    authoredLink.onmouseover = function(){authoredLink.style.color = "lightblue"};<br>
    authoredLink.onmouseout = function(){authoredLink.style.color = "blue"};<br>
    authoredLink.textDecoration = "none"<br>
    authoredLink.target = "blank"<br>
    authoredLink.innerText = "JJ Kanu"<br>
    authored.appendChild(document.createTextNode("By: "))<br>
    authored.appendChild(authoredLink)<br>

    titleCard.up.editCardContent(authored, <br>
        "text-align: right; font-family: 'Open Sans', sans-serif; font-size: 20px; font-weight: 700; margin-top: 10px; margin-right: 21px")<br>
    document.querySelector('#titleCard').addEventListener("mouseover", () => {<br>
        titleCard.slideUp();<br>
    }, false);<br>
    document.querySelector('#titleCard').addEventListener("mouseout", () => {<br>
        titleCard.slideUp();<br>
    }, false);<br>`

titleBlock.down.editCardContent(codeBlockContainerExpand)
titleBlock.down.editCardStyle("border", "none")

let tBlockIn = true
let titleBlockHeight
const setHeight = () =>{
    tBlockIn ? tBlockIn = false: tBlockIn = true
    titleBlockHeight = tBlockIn ? "314px": "1221px"
}

document.querySelector('#titleExpand').addEventListener("click", () => {
    setHeight()
    document.querySelector('#titleBlock').style.height = titleBlockHeight
    titleBlock.slideDown();
}, false)

// Nested Card ======================================================================
const makeNestedCard = (MCard,divName) =>{

    const startPoint = MCard

    document.querySelector(divName).appendChild(startPoint.card)

    startPoint.editCardStyle("backgroundColor","#3399ff")
    startPoint.editCardContent("nestedCard", "font-size:30px; padding-top:45px; text-align:center;")

    // Function to Label Subcards
    const labelSubCard = (direction,fontSize,paddingTop) => {
        eval(`startPoint.${direction}.editCardContent("${direction}", "font-size:${fontSize}; padding-top:${paddingTop}; text-align:center;")`)
    }

    startPoint.makeRight()
    startPoint.right.editCardStyle("backgroundColor","#66ccff")
    labelSubCard("right", "30px", "45px")

    startPoint.right.makeRight()
    startPoint.right.right.editCardStyle("backgroundColor","#ccffff")
    labelSubCard("right.right", "30px", "45px")

    startPoint.right.right.makeRight()
    startPoint.right.right.right.editCardStyle("backgroundColor","#dbffff")
    labelSubCard("right.right.right", "30px", "45px")

    startPoint.right.right.makeDown()
    startPoint.right.right.down.editCardStyle("backgroundColor","#ccffff")
    labelSubCard("right.right.down", "30px", "45px")

}

const startPoint = new MultiCard("240px", "120px")
makeNestedCard(startPoint,"#nestedCard")
startPoint.slideRight()
startPoint.right.slideRight()
startPoint.right.right.slideRight()
startPoint.right.right.slideDown()

const deleteOne = new MultiCard("240px", "120px")
makeNestedCard(deleteOne,"#deleteCard")
deleteOne.right.deleteCard(false)
deleteOne.slideRight()
deleteOne.right.slideRight()
deleteOne.right.slideDown()

const deleteAll = new MultiCard("240px", "120px")
makeNestedCard(deleteAll,"#deleteCardChildren")
deleteAll.right.right.deleteCard()
deleteAll.slideRight()


// Nested Card Expand Block ================================================================
const nestedBlock = new MultiCard("950px", "125px");
document.querySelector('#nestedBlock').appendChild(nestedBlock.card)
const nestedCodeBlockContainer = document.createElement('div')
nestedCodeBlockContainer.className = "codeBlock"

nestedCodeBlockContainer.innerHTML = `const startPoint = new MultiCard("240px", "120px")<br>
    document.querySelector(nestedBlock).appendChild(startPoint.card)<br>
    <br>
    startPoint.editCardStyle("backgroundColor","#3399ff")<br>
    startPoint.editCardContent("nestedCard", "font-size:30px; padding-top:45px; text-align:center;")`

nestedBlock.editCardContent(nestedCodeBlockContainer)
nestedBlock.editCardStyle("border", "none")

nestedBlock.makeDown(undefined, "482px")
const nestedCodeBlockContainerExpand = document.createElement('div')
nestedCodeBlockContainerExpand.className = "codeBlock"
nestedCodeBlockContainerExpand.innerHTML = `
    // Function to Label Subcards<br>
    const labelSubCard = (direction,fontSize,paddingTop) => {<br>
        eval('startPoint.$ {direction}.editCardContent("$ {direction}", "font-size:$ {fontSize}; padding-top:$ {paddingTop}; text-align:center;")')<br>
    }<br>
    <br>
    startPoint.makeRight()<br>
    startPoint.right.editCardStyle("backgroundColor","#66ccff")<br>
    labelSubCard("right", "30px", "45px")<br>
    <br>
    startPoint.right.makeRight()<br>
    startPoint.right.right.editCardStyle("backgroundColor","#ccffff")<br>
    labelSubCard("right.right", "30px", "45px")<br>
    <br>
    startPoint.right.right.makeRight()<br>
    startPoint.right.right.right.editCardStyle("backgroundColor","#dbffff")<br>
    labelSubCard("right.right.right", "30px", "45px")<br>
    <br>
    startPoint.right.right.makeDown()<br>
    startPoint.right.right.down.editCardStyle("backgroundColor","#ccffff")<br>
    labelSubCard("right.right.down", "30px", "45px")<br>
    <br>
    startPoint.slideRight()<br>
    startPoint.right.slideRight()<br>
    startPoint.right.right.slideRight()<br>
    startPoint.right.right.slideDown()<br>
`

nestedBlock.down.editCardContent(nestedCodeBlockContainerExpand)
nestedBlock.down.editCardStyle("border", "none")

let tBlockIn2 = true
let nestedBlockHeight2
const setHeight2 = () =>{
    tBlockIn2 ? tBlockIn2 = false: tBlockIn2 = true
    nestedBlockHeight2 = tBlockIn2 ? "130px": "607px"
}

document.querySelector('#nestedExpand').addEventListener("click", () => {
    setHeight2()
    document.querySelector('#nestedBlock').style.height = nestedBlockHeight2
    nestedBlock.slideDown();
}, false)


// Art Hover Card ===================================================================================
const snContainer = document.createElement('img')
snContainer.src = "https://www.vangoghgallery.com/img/starry_night_full.jpg"
snContainer.style.width = "100%"
snContainer.style.height = "100%"
const snCard = new MultiCard("320px","254px",snContainer)
document.querySelector('#hoverCard').appendChild(snCard.card)

snCard.makeUp(undefined, "30px")
snCard.makeDown(undefined, "90px", false)

snContainer.addEventListener("mouseover", function( event ) {
    snCard.slideDown();
    snCard.slideUp();
}, false);
snContainer.addEventListener("mouseout", function( event ) {
    snCard.slideDown();
    snCard.slideUp();
}, false);

snCard.up.editCardStyle("backgroundColor","#181848")
snCard.up.editCardStyle("color","white")
snCard.up.editCardStyle("textAlign","center")
snCard.up.editCardStyle("borderColor","#4888C8")
snCard.down.editCardStyle("backgroundColor","#181848")
snCard.down.editCardStyle("color","white")
snCard.down.editCardStyle("textAlign","center")
snCard.down.editCardStyle("borderColor","#4888C8")

snCard.up.editCardContent("Starry Night ~ Vincent Van Gogh",
"padding-top: 3px;")
snCard.down.editCardContent("Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an imaginary village.",
"padding-top: 5px;")


// Art Hover Code Block
const hoverBlock = new MultiCard("950px", "347px");
document.querySelector('#hoverBlock').appendChild(hoverBlock.card)
const hoverBlockContainer = document.createElement('div')
hoverBlockContainer.className = "codeBlock"

hoverBlockContainer.innerHTML = `
    const snContainer = document.createElement('img') <br>
    snContainer.src = "https://www.vangoghgallery.com/img/starry_night_full.jpg"<br>
    snContainer.style.width = "100%"<br>
    snContainer.style.height = "100%"<br>
    const snCard = new MultiCard("320px","254px",snContainer)<br>
    document.querySelector('#starryNight').appendChild(snCard.card)<br>
    <br>
    snCard.makeUp(undefined, "30px")<br>
    snCard.makeDown(undefined, "90px", false)<br>
    <br>
    snContainer.addEventListener("mouseover", function( event ) {<br>
        snCard.slideDown();<br>
        snCard.slideUp();<br>
    }, false);<br>
    snContainer.addEventListener("mouseout", function( event ) {<br>
        snCard.slideDown();<br>
        snCard.slideUp();<br>
    }, false);
`

hoverBlock.editCardContent(hoverBlockContainer)
hoverBlock.editCardStyle("border", "none")

hoverBlock.makeDown(undefined, "278px")
const hoverBlockContainerExpand = document.createElement('div')
hoverBlockContainerExpand.className = "codeBlock"
hoverBlockContainerExpand.innerHTML = `
    snCard.up.editCardStyle("backgroundColor","#181848") <br>
    snCard.up.editCardStyle("color","white")<br>
    snCard.up.editCardStyle("textAlign","center")<br>
    snCard.up.editCardStyle("borderColor","#4888C8")<br>
    snCard.down.editCardStyle("backgroundColor","#181848")<br>
    snCard.down.editCardStyle("color","white")<br>
    snCard.down.editCardStyle("textAlign","center")<br>
    snCard.down.editCardStyle("borderColor","#4888C8")<br>
    <br>
    snCard.up.editCardContent("Starry Night ~ Vincent Van Gogh",<br>
    "padding-top: 3px;")<br>
    snCard.down.editCardContent("Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an imaginary village.",<br>
    "padding-top: 5px;")<br>
`

hoverBlock.down.editCardContent(hoverBlockContainerExpand)
hoverBlock.down.editCardStyle("border", "none")

let tBlockIn3 = true
let hoverBlockHeight3
const setHeight3 = () =>{
    tBlockIn3 ? tBlockIn3 = false: tBlockIn3 = true
    hoverBlockHeight3 = tBlockIn3 ? "347px": "624px"
}

document.querySelector('#hoverExpand').addEventListener("click", () => {
    setHeight3()
    document.querySelector('#hoverBlock').style.height = hoverBlockHeight3
    hoverBlock.slideDown();
}, false)