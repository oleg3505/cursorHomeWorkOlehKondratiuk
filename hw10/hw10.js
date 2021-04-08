const block = document.querySelectorAll('.block');
function changeColor(){
    block.forEach(element => {
        const color1 =  Math.round(- 0.5 + Math.random() * (255  + 0.5));
        const color2 =  Math.round(- 0.5 + Math.random() * (255  + 0.5));
        const color3 =  Math.round(- 0.5 + Math.random() * (255  + 0.5));
        element.setAttribute("style", `background-color: rgb(${color1}, ${color2}, ${color3});`)
    });
}
setInterval(() => {
    changeColor()
}, 1*1000);