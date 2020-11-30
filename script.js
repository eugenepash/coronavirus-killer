const startButton = document.querySelector('.startButton');
const stopButton = document.querySelector('.stopButton');
const player = document.querySelector('.player');
const playerId = document.querySelector('playerId');
const playerNone = document.querySelector('.playerNone');
const settingsButton = document.querySelector('.settingsButton');
const popupSettings = document.querySelector('.popupSettings');
const close = document.querySelector('.close');
// форма
const squareCheck = document.querySelector('.squareCheck');
const circleCheck = document.querySelector('.circleCheck');
// Color
const redCheck = document.querySelector('.redCheck');
const blueCheck = document.querySelector('.blueCheck');
const yellowCheck = document.querySelector('.yellowCheck');

// check controls
const mouseCheck = document.querySelector('.mouseCheck');
const keyboardCheck = document.querySelector('.keyboardCheck');


startButton.onclick = function () {
    startButton.style.display = 'none';
    stopButton.style.display = 'flex';
    player.style.display = 'flex';
}
stopButton.onclick = function () {
    stopButton.style.display = 'none';
    startButton.style.display = 'flex';
    player.style.display = 'none';
}

settingsButton.onclick = function () {
    popupSettings.style.display = 'block';
}
close.onclick = function () {
    popupSettings.style.display = 'none';
}
window.onclick = function (event) {
    if (event.target == popupSettings) {
        popupSettings.style.display = "none";
    }
}

//  color check

redCheck.onclick = function () {
    player.style.background = 'red';
    player.style.color = 'white';
}
blueCheck.onclick = function () {
    player.style.background = 'blue';
    player.style.color = 'white';
}
yellowCheck.onclick = function () {
    player.style.background = 'yellow';
    player.style.color = 'black';
}

// form check
squareCheck.onclick = function () {
    player.className = 'player';
    player.style.borderRadius = '10px';
}

circleCheck.onclick = function () {
    player.className = 'player';
    player.style.borderRadius = '70px';
}
// custom Images
const buttonSetCustomImage = document.querySelector('.buttonSetCustomImage');
const customImage = document.querySelector('customImage');
const preview = document.querySelector('#upload-img');

buttonSetCustomImage.onclick = function(){
   
}

// keyboard
keyboardCheck.onclick = function () {
    document.body.removeEventListener("mousemove", getClickPosition, false);
    document.addEventListener('keydown', keyPress);
}

function place(id, x_pos, y_pos) {
    var element = document.getElementById(id);
    element.style.position = "absolute";
    element.style.left = x_pos + 'px';
    element.style.top = y_pos + 'px';
}

function update() {
    document.removeEventListener('keydown', keyPress);
}

function keyPress(e) {
    var x = e.keyCode;
    var move = document.getElementById("move").getBoundingClientRect();
    var left = parseInt(move.left, 10);
    var top = parseInt(move.top, 10)
    switch (x) {
        case 37:
            place('move', left - 30, top);
            break;

        case 39:
            place('move', left + 30, top);
            break;

        case 38:
            place('move', left, top - 30);
            break;

        case 40:
            place('move', left, top + 30);
            break;
    }
    // console.log(x);

}
update();

// Mouse
mouseCheck.onclick = function () {
    document.body.addEventListener("mousemove", getClickPosition, false);
    document.removeEventListener('keydown', keyPress);
}
var mouseX = 0;
var mouseY = 0;
document.body.addEventListener("mousemove", getClickPosition, false);

function getClickPosition(e) {
    var player = document.querySelector(".player");
    var parentPosition = getPosition(e.currentTarget);
    var xPosition = e.clientX - parentPosition.x - (player.clientWidth / 1000);
    var yPosition = e.clientY - parentPosition.y - (player.clientHeight / 1000);
    player.style.left = xPosition + "px";
    player.style.top = yPosition + "px";
}

function getPosition(element) {
    var xPos = 0.10;
    var yPos = 0.10;
    while (element) {
        if (element.tagName == "BODY") {
            var xScroll = element.scrollLeft || document.documentElement.scrollLeft;
            var yScroll = element.scrollTop || document.documentElement.scrollTop;
            xPos += (element.offsetLeft - xScroll + element.clientLeft);
            yPos += (element.offsetTop - yScroll + element.clientTop);
        } else {
            xPos += (element.offsetLeft - element.scrollLeft + element.clientLeft);
            yPos += (element.offsetTop - element.scrollTop + element.clientTop);
        }
        element = element.offsetParent;
    }
    return {
        x: xPos,
        y: yPos
    };
}
