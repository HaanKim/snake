const box = document.querySelector('div')
let x = 0;

window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        x += 10
        box.style.position = `${x}px 50px`;
        
    }
})