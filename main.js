
var container = document.querySelector('.container');
var mouseActive = false;

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        var div = document.createElement('div')
        div.className = 'box'
        div.style.width = '31.25px'
        div.style.height = '31.25px'

        container.appendChild(div);

        
    }   
}
var boxes = document.querySelectorAll('.box');

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
        e.target.style.backgroundColor = 'black';
    }
}