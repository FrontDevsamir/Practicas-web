


document.querySelector('.bars__menu').addEventListener('click', animateBars)

let line1__bars = document.querySelector('.line1__bars-menu')
let line2__bars = document.querySelector('.line2__bars-menu')
let line3__bars = document.querySelector('.line3__bars-menu')


function animateBars() {
    line1__bars.classList.toggle('activeline1__bars-menu')
    line2__bars.classList.toggle('activeline2__bars-menu')
    line3__bars.classList.toggle('activeline3__bars-menu')

    document.querySelector('.nav__ul').classList.toggle('nav__ul--visible')
}