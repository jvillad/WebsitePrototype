
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', function(){
    nav.classList.toggle('nav-active');
});

const onClick = document.querySelectorAll('.nav-links a');
console.log(onClick);

onClick.forEach(element => {
    element.addEventListener('click', () => {
        nav.classList.remove('nav-active')
    })
});


 


