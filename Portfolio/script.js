//Js Code

//navscroll//
let nav= document.querySelector('nav');
window.addEventListener('scroll',()=>{
    nav.classList.toggle('nav-scroll', window.scrollY > 0);

});

//Active toggle//
let AllNavLinkA= document.querySelectorAll('.nav-links li a');


//Active Add//
AllNavLinkA.forEach(item=>{
    item.addEventListener('click', ()=>{
        removeActive();
        item.classList.add('active');

    })
});

//Active Remove//
    const removeActive=()=> AllNavLinkA.forEach(item=>{  
    item.classList.remove('active')

});

//Nav links toggler//
let menuBars=document.querySelector('nav button');
let navlinks=document.querySelector('.nav-links')
menuBars.addEventListener('click',()=>{
    navlinks.classList.toggle('nav-link-block');

});
