const stopButton = document.querySelector('.stopButton'),
      startButton = document.querySelector('.startButton'),
      player = document.querySelector('.player'),
      settingsButton = document.querySelector('.settingsButton'),
      popupSettings = document.querySelector('.popupSettings'),
      close = document.querySelector('.close'),
      
      // форма
      squareCheck = document.querySelector('.squareCheck'),
      circleCheck = document.querySelector('.circleCheck'),
      // Color
      redCheck = document.querySelector('.redCheck'),
      blueCheck = document.querySelector('.blueCheck'),
      yellowCheck = document.querySelector('.yellowCheck'),
      customColorCheck = document.querySelector('.customColorCheck'),
      colorPicker = document.querySelector(".colorPicker"),
      // check controls
      mouseCheck = document.querySelector('.mouseCheck'),
      keyboardCheck = document.querySelector('.keyboardCheck');


startButton.onclick = function () {
    startButton.style.display = 'none';
    stopButton.style.display = 'flex';
    player.style.display = 'flex';
    document.querySelector('.headerGame').style.display = 'none';
}
stopButton.onclick = function () {
    stopButton.style.display = 'none';
    startButton.style.display = 'flex';
    player.style.display = 'none';
    document.querySelector('.headerGame').style.display = 'flex';
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
    document.addEventListener('keydown');
}


function update() {
    document.removeEventListener('keydown');
}

let left = 0;
let bottom = 0;

window.onkeydown = function move_left() {
    if (event.keyCode === 37) {
        left = left - 20;
        player.style.left = left + 'px';
    } else if (event.keyCode === 39) {
        left = left + 20;
        player.style.left = left + 'px';
    }

    if (event.keyCode === 38) {
        bottom = bottom - 20;
        player.style.bottom = bottom + 'px';
    } else if (event.keyCode ===40) {
        bottom = bottom + 20;
        player.style.bottom = bottom + 'px';
    }
};


// Mouse
mouseCheck.onclick = function () {
    document.body.addEventListener("mousemove", getClickPosition, false);

    function keyPress() {

    }

    document.removeEventListener('keydown', keyPress);
}

document.body.addEventListener("mousemove", getClickPosition, false);

function getClickPosition(i) {
    const parentPosition = getPosition(i.currentTarget);
    const xPosition = i.clientX - parentPosition.x;
    const yPosition = i.clientY - parentPosition.y;
    player.style.left = xPosition + "px";
    player.style.top = yPosition + "px";
}

function getPosition(element) {
    const xPos = 0;
    const yPos = 0;
    return {
        x: xPos,
        y: yPos
    };
}
