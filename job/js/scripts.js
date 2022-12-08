const hb = document.querySelector('#navButton');
const pn = document.querySelector('#navList');

hb.addEventListener('click', () => {
    hb.classList.toggle('open');
    pn.classList.toggle('open');
})