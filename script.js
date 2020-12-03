let startButton;
startButton = document.querySelector('.startButton');
// форма
// Color
// check controls
const stopButton = document.querySelector('.stopButton'), player = document.querySelector('.player'),
    settingsButton = document.querySelector('.settingsButton'),
    popupSettings = document.querySelector('.popupSettings'), close = document.querySelector('.close'),
    squareCheck = document.querySelector('.squareCheck'), circleCheck = document.querySelector('.circleCheck'),
    redCheck = document.querySelector('.redCheck'), blueCheck = document.querySelector('.blueCheck'),
    yellowCheck = document.querySelector('.yellowCheck'),
    customColorCheck = document.querySelector('.customColorCheck'),
    colorPicker = document.querySelector(".colorPicker"), mouseCheck = document.querySelector('.mouseCheck'),
    keyboardCheck = document.querySelector('.keyboardCheck');


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
    if (event.target === popupSettings) {
        popupSettings.style.display = "none";
    }
}

//  color check



redCheck.onclick = function () {
    player.style.background = '#B43428';
    player.style.color = 'white';
    colorPicker.style.display = 'none';
}
blueCheck.onclick = function () {
    player.style.background = '#2D78EB';
    player.style.color = 'white';
    colorPicker.style.display = 'none';
}
yellowCheck.onclick = function () {
    player.style.background = '#F5CF2F';
    player.style.color = 'black';
    colorPicker.style.display = 'none';
}
customColorCheck.onclick = function () {
    colorPicker.style.display = 'block';

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
const preview = document.querySelector('.preview');
const uploadImg = document.querySelector('.uploadImg');


buttonSetCustomImage.onclick = function (){
    alert('смена картинки');
}


// keyboard
keyboardCheck.onclick = function () {
    document.body.removeEventListener("mousemove", getClickPosition, false);
    document.addEventListener('keydown', keyPress);
}

function place(id, x_pos, y_pos) {
    const element = document.getElementById(id);
    element.style.position = "absolute";
    element.style.left = x_pos + 'px';
    element.style.top = y_pos + 'px';
}

function update() {
    document.removeEventListener('keydown', keyPress);
}

function keyPress(e) {
    const x = e.keyCode;
    const move = document.getElementById("move").getBoundingClientRect();
    const left = parseInt(move.left, 10);
    const top = parseInt(move.top, 10);
    switch (x) {
        case 37:
            place('move', left - 50, top);
            break;

        case 39:
            place('move', left + 50, top);
            break;

        case 38:
            place('move', left, top - 50);
            break;

        case 40:
            place('move', left, top + 50);
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
const mouseX = 5;
const mouseY = 5;
document.body.addEventListener("mousemove", getClickPosition, false);

function getClickPosition(e) {
    const player = document.querySelector(".player");
    const parentPosition = getPosition(e.currentTarget);
    const xPosition = e.clientX - parentPosition.x - (player.clientWidth / 1000);
    const yPosition = e.clientY - parentPosition.y - (player.clientHeight / 1000);
    player.style.left = xPosition + "px";
    player.style.top = yPosition + "px";
}

function getPosition(element) {
    var xPos = 0.10;
    var yPos = 0.10;
    while (element) {
        if (element.className === "area") {
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
