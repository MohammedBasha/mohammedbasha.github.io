// Recaptcha
window.onload = function () {
    var el = document.getElementById('g-recaptcha-response');
    if (el) {
        el.setAttribute('required', 'required');
    }
}

/* Navigation scrolling */
const nav = document.querySelector('#nav');
const navHeight = nav.clientHeight;
const navAnchors = nav.querySelectorAll('a');
const moveToNext = document.querySelectorAll('article > section > a');

navAnchors.forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        
        let section = document.querySelector(anchor.getAttribute('href'));
        window.scrollTo({
            top: section.offsetTop - navHeight,
            behavior: "smooth"
        });
    });
});

moveToNext.forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        
        let section = document.querySelector(anchor.getAttribute('href'));
        window.scrollTo({
            top: section.offsetTop - navHeight,
            behavior: "smooth"
        });
    });
});

/* Copyright */
const copyrightYear = document.querySelector('.contact > p > span');
copyrightYear.innerHTML = new Date().getFullYear();