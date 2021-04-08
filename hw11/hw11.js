

document.onkeypress = function(event){
    const k = event.code;
    const element = document.querySelector(`#${k}`);
    element.setAttribute('style', `background-color: green; border: 4px solid yellow; `);
    setTimeout(() => {
        element.removeAttribute('style', `background-color: green; border: 4px solid yellow; `)
    }, 1*1000);
    const audio = document.querySelector(`.${k}`);
    audio.play()
    setTimeout(() => {
        audio.pause()
    }, 1*1000);
    
}
const elements = ['A', 'S', 'D', 'F', 'G'];
elements.forEach(letter =>{
    const element = document.querySelector(`#Key${letter}`);
    const audio = document.querySelector(`.Key${letter}`);

    element.onclick = () =>{
        element.setAttribute('style', `background-color: green; border: 4px solid yellow; `);
        setTimeout(() => {
            element.removeAttribute('style', `background-color: green; border: 4px solid yellow; `)
        }, 1*1000);
        audio.play()
        setTimeout(() => {
            audio.pause()
        }, 1*1000);
    }

    
});

