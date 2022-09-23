
const navIcon= document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

navIcon.addEventListener('click', function(){
    nav.classList.toggle('nav-active');
});

const onClick = document.querySelectorAll('.nav-links a');

onClick.forEach(element => {
    element.addEventListener('click', () => {
        nav.classList.remove('nav-active')
    })
});


 


