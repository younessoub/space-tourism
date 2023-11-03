const hamburger = document.querySelector('.hamburger')
const close = document.querySelector('.close')
const mobileLinks = document.querySelector('.mobile-navlinks')

hamburger.addEventListener('click', () => {
    toggleMenu('show')
})

close.addEventListener('click', () => {
    toggleMenu('hide')
})

function toggleMenu(par) {
    hamburger.style.display = par == 'show' ? 'none' : 'block';
    close.style.display = par == 'show' ? 'block' : 'none';
    mobileLinks.style.display = par == 'show' ? 'block' : 'none';

}
