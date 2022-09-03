
var container = document.querySelector('.container');
var arr = []
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        var div = document.createElement('div')
        div.className = 'box'
        div.style.width = '31.25px'
        div.style.height = '31.25px'

        container.appendChild(div);

        
    }
    
}