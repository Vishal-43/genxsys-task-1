const navbar = document.getElementById('navbar');
const navmenu = document.getElementById('nav-menu');
const hambutger = document.getElementById('hamburger')


window.addEventListener('scroll',()=>{
    if (window.scrollY > 50){
        navbar.classList.add('scrolled');

    }else{
        navbar.classList.remove('scrolled');
    }
});

document.querySelectorAll('.nav-link').forEach(link =>{
    link.addEventListener('mouseenter',() =>{
        link.computedStyleMap.transform = 'scale(1.05)';
    });
    link.addEventListener('mouseleave',()=>{
        link.computedStyleMap.transform = 'scale(1)';
    });
});

hamburger.addEventListener('click',()=>{
    navmenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click',()=>{
        navmenu.classList.remove('active');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click',(e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            target.scrollIntoView({behavior:'smooth',block: 'start'});
        }
    });
});