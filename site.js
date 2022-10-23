
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


let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

