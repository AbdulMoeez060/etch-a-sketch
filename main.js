
var container = document.querySelector('.container');
var mouseActive = false;
var eraser = document.querySelector('.eraser');
var blackButton = document.querySelector('.black');
var boxNum = 16;

blackButton.addEventListener('click',toggleColor)
eraser.addEventListener('click',toggleColor);


var color = 'black';
var boxes;

function makeBoxes(num){
    container.innerHTML = ''

    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            var div = document.createElement('div');
            var size = 650/num;
    
            div.className = 'box'
            div.style.width = `${size}px`
            div.style.height = `${size}px`
    
            container.appendChild(div);
            boxes = document.querySelectorAll('.box');
            addListenerToBoxes()

    
            
        }   
    }
}
makeBoxes(16)

function changeSize(value){
    boxNum = value;
    output = document.querySelector('output');
    output.value = `${value} x ${value}`
    makeBoxes(boxNum)
}

function addListenerToBoxes(){
    boxes.forEach(box => {

        box.addEventListener('click',toggleMouse);
        box.addEventListener('mouseleave',changeColor);
    
    });
}




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