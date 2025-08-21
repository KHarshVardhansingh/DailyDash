
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  navlist.classList.toggle('active');
  menu.classList.toggle('bx-x'); 
};

document.querySelectorAll('.navlist li a').forEach(link => {
  link.addEventListener('click', () => {
    navlist.classList.remove('active');
    menu.classList.remove('bx-x');
  });
});

function readMore() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less"; 
    moreText.style.display = "inline";
  }
}

let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
  slides.forEach((slide, i) => {
    slide.style.display = (i === index) ? "block" : "none";
  });
  index = (index + 1) % slides.length;
}

showSlide(); 
setInterval(showSlide, 4000); 
