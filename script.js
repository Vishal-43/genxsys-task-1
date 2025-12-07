const navbar = document.getElementById('navbar');
const navmenu = document.getElementById('nav-menu');
const hambutger = document.getElementById('hamburger')
const text2 = document.getElementById('text2')
const text2containt = document.getElementsByClassName('text2containt')
const text4 = document.getElementById('text4')
const text4containt = document.getElementsByClassName('text4containt')

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


text2.addEventListener('mouseenter',()=>{
    for(let i = 0; i<text2containt.length; i++){
        text2containt[i].style.display = 'flex' ;
    }
});

text2.addEventListener('mouseleave',()=>{
    for(let i = 0; i<text2containt.length; i++){
        text2containt[i].style.display = 'none' ;
    }
});

text4.addEventListener('mouseenter',()=>{
    for(let i = 0; i<text4containt.length; i++){
        text4containt[i].style.display = 'flex' ;
    }
});

text4.addEventListener('mouseleave',()=>{
    for(let i = 0; i<text4containt.length; i++){
        text4containt[i].style.display = 'none' ;
    }
});