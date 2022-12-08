const hb = document.querySelector('#hamburgerBtn');
const pn = document.querySelector('#navList');

hb.addEventListener('click', () => {
    hb.classList.toggle('open');
    pn.classList.toggle('open');
})