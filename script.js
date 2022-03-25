const container = document.querySelector('.container');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');


// EVENT LISTENERS

openBtn.addEventListener('click', () => {
    container.classList.add('rotated');
})

closeBtn.addEventListener('click', () => {
    container.classList.remove('rotated');
})