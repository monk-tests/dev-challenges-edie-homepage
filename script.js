const navOpenBtn = document.querySelector('.ham')
const navCloseBtn = document.querySelector('.nav-close')
const navEl = document.querySelector('.navigation')
// navLiEls = [... document.querySelectorAll('.header-nav ul li')]

navOpenBtn.addEventListener('click', () => {
    navEl.classList.add('active')
})
navCloseBtn.addEventListener('click', () => {
    navEl.classList.remove('active')
})

navEl.addEventListener('click', (e) => {
    console.log()
    if (e.target.classList.contains('nav-link')) {
        navEl.classList.remove('active')
    }
})
