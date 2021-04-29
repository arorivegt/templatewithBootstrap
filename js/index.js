window.sr = ScrollReveal();
sr.reveal('.navbar',{
    duration: 3000,
    origin: 'bottom'
});

window.sr = ScrollReveal();
sr.reveal('.header-content-left',{
    duration: 4000,
    origin: 'top',
    distance: '200px'
});

window.sr = ScrollReveal();
sr.reveal('.header-content-right',{
    duration: 2000,
    origin: 'right',
    distance: '200px'
});

window.sr = ScrollReveal();
sr.reveal('.header-btn',{
    duration: 2000,
    origin: 'bottom',
    delay: 1000
});

window.sr = ScrollReveal();
sr.reveal('#testimonal',{
    duration: 2000,
    origin: 'left',
    distance: '300px',
    viewFactor: 0.2
});

//smoth scrolling, the solution is in stackOverflow
//https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});