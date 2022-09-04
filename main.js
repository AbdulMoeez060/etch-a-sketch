
var container = document.querySelector('.container');
var mouseActive = false;
var eraser = document.querySelector('.eraser');
var blackButton = document.querySelector('.black');
var boxNum = 16;

blackButton.addEventListener('click',toggleColor)

var color = 'black';

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        var div = document.createElement('div');
        var size = 650/boxNum;

        div.className = 'box'
        div.style.width = `${size}px`
        div.style.height = `${size}px`

        container.appendChild(div);

        
    }   
}
var boxes = document.querySelectorAll('.box');

eraser.addEventListener('click',toggleColor);

function toggleColor(e){
    mouseActive = false
    if (color == 'black' && e.target.classList.contains('eraser')) {
        blackButton.classList.remove('active');
        
        eraser.classList.add('active');
        color = 'rgba(195, 194, 194,0.05)'
    }
    else{
        eraser.classList.remove('active');
        color = 'black'
        blackButton.classList.add('active');

    }
}

boxes.forEach(box => {

    box.addEventListener('click',toggleMouse);
    box.addEventListener('mouseleave',changeColor);

});

function toggleMouse(e){
    if(mouseActive){
        mouseActive = false;
    }
    else{
        mouseActive = true;
    }
}

function changeColor(e){
    if (mouseActive) {
        e.target.style.backgroundColor = color;
    }
}