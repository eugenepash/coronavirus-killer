let stopButton = document.querySelector('.stopButton'),
      startButton = document.querySelector('.startButton'),
      player = document.querySelector('.player'),
      settingsButton = document.querySelector('.settingsButton'),
      popupSettings = document.querySelector('.popupSettings'),
      close = document.querySelector('.close'),
      area = document.querySelector('.area'),
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


let outputCoordinate = document.querySelector('.outputCoordinate');
let score = document.querySelector('.score');


//Получение координат $newdiv











//СТАРТ
startButton.onclick = function () {
    startButton.style.display = 'none';
    stopButton.style.display = 'flex';
    player.style.display = 'flex';
    document.querySelector('.headerGame').style.display = 'none';
    //замена курсора
    $('html,body').css('cursor', 'crosshair');

    //генерация кружочков для сбора
    (makeDiv = function () {
        const divsize = ((Math.random() * 80) + 20).toFixed();
        const border = '#' + Math.round(0xffffff * Math.random()).toString(16);
        let makeDivSpeed = ((Math.random() * 200) + 20).toFixed();
        const rounded = 70;
        $newdiv = $('<div class="newDiv">').css({
            'width': divsize + 'px',
            'height': divsize + 'px',
            'border-radius': rounded + 'px',
            'border': '2px solid' + border,
            'position': 'inherit',
            'display': 'flex'
        });
        const posx = (Math.random() * ($(document).width() - divsize)).toFixed();
        // const posy = (Math.random() * ($(document).height() - divsize)).toFixed();
        $newdiv.css({
            'position': 'absolute',
            'left': posx + 'px',
            'top': '1200' + 'px',
            'display': 'none'
        }).appendTo('.area').fadeIn( makeDivSpeed, function () {
            makeDiv();


            //движение кружков вверх
            $newdiv.animate({top: "1px"}, 15000);

            $('.player').offset();

            //уничтожение при касании
            $($newdiv).mouseover(function () {
                this.remove();
            //счет:
                //инкремент
                $.fn.extend({
                    increment: function () {
                        return this.text( function (i, currentText) {
                            return parseInt(currentText, 0) + 1;});}});
                //вывод счета
                $(".score").increment();

            //уменьшение радиуса и скорости
                $('.player').css({
                    'height':'-=0.5' + 'px',
                    'width':'-=0.5' + 'px',
                });
             //ускорение генерации после сбора


            });
        });
    })();
    //генерация кружочков с плюсом
    (makeDivPlus = function () {
        const divsizePlus = 40;
        let makeDivSpeed = 20000;
        const rounded = 40;
        $newdivPlus = $('<div class="newDiv">+</div>').css({
            'width': divsizePlus + 'px',
            'height': divsizePlus + 'px',
            'border-radius': rounded + 'px',
            'position': 'inherit',
            'background-color' : '#0B6623',
            'color' : 'white',
            'display' : 'flex',
            'font-size' : '100%',
            'font-weight' : '800'
        });
        const posx = (Math.random() * ($(document).width() - divsizePlus)).toFixed();
        // const posy = (Math.random() * ($(document).height() - divsizePlus)).toFixed();
        $newdivPlus.css({
            'position': 'absolute',
            'left': posx + 'px',
            'top': '1200' + 'px',
            'display': 'none'
        }).appendTo('.area').fadeIn( makeDivSpeed, function () {
            makeDivPlus();


            //движение кружков вверх
            $newdivPlus.animate({top: "1px"}, 15000);

            //уничтожение при касании
            $($newdivPlus).mouseover(function () {
                this.remove();
                //счет:
                //инкремент
                $.fn.extend({
                    increment: function () {
                        return this.text( function (i, currentText) {
                            return parseInt(currentText, 0) + 1;});}});
                //вывод счета
                $(".score").increment();

                //уменьшение радиуса и скорости
                $('.player').css({
                    'height':'80px',
                    'width':'80px',
                });
                //ускорение генерации после сбора


            });
        });
    })();
}


// СТОП
stopButton.onclick = function () {
    stopButton.style.display = 'none';
    startButton.style.display = 'flex';
    player.style.display = 'none';
    document.querySelector('.headerGame').style.display = 'flex';

    //курсор
    $('html,body').css('cursor', 'default');
    //остановка генерации
    (makeDiv = function () {
        $newdiv.remove();
    });
    (makeDivPlus = function () {
        $newdivPlus.remove();
    });
    //удаление сгенерированных кружков
    $('.newDiv').remove();
    $('.newDivPlus').remove();
    // обнуление счета
    $(".score").html('0');
    //обнуление player
    $('.player').css({
        'height' : '70' + 'px',
        'width'  : '70' + 'px',
        'transition' : 'all 0.2s linear',
    });
}

// Настройки
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
    player.style.background = '#fbc243';
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
    
}


// keyboard
keyboardCheck.onclick = function () {
    document.body.removeEventListener("mousemove", getClickPosition, false);
    document.addEventListener('keydown');
}


function update() {
    document.removeEventListener('keydown');
}

let left1 = 0;
let top1 = 0;

window.onkeydown = function move_left() {
    if (event.keyCode === 37) {
        left1 = left1 - 30;
        player.style.left = left1 + 'px';
    } else if (event.keyCode === 39) {
        left1 = left1 + 30;
        player.style.left = left1 + 'px';
    }
    if(event.keyCode === 38) {
        top1 = top1 - 30;
        player.style.top = top1 + 'px';
    } else if (event.keyCode ===40) {
        top1 = top1 + 30;
        player.style.top = top1 + 'px';
    }
    if(event.keyCode === 37 && event.keyCode === 38){
        left1 = left1 - 30;
        player.style.left = left1 + 'px';
        top1 = top1 - 30;
        player.style.top = top1 + 'px';
    }
};


function keyPress() {

}

// Mouse
mouseCheck.onclick = function () {
    document.body.addEventListener("mousemove", getClickPosition, false);
    document.removeEventListener('keydown', keyPress);
}
var mouseX = 0;
var mouseY = 0;
document.body.addEventListener("mousemove", getClickPosition, false);

function getClickPosition(e) {
    const parentPosition = getPosition(e.currentTarget);
    var xPosition = e.pageX - parentPosition.x - (player.clientWidth / 1000);
    var yPosition = e.pageY - parentPosition.y - (player.clientHeight / 1000);
    player.style.left = xPosition + "px";
    player.style.top = yPosition + "px";
    outputCoordinate.innerHTML = e.pageX + ':' + e.pageY;

}
function getPosition(w) {
    var xPos = 0;
    var yPos = 0;
    return {
        x: xPos,
        y: yPos
    };
}





