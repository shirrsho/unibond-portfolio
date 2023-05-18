window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 0) {
    header.classList.add('header-scroll');
  } else {
    header.classList.remove('header-scroll');
  }
});

const carouselImages = document.querySelectorAll('.carousel-image');
let currentImageIndex = 0;

function showNextImage() {
  carouselImages[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
  carouselImages[currentImageIndex].classList.add('active');
}

setInterval(showNextImage, 3000);

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const navlinks = document.querySelector('.nav-links');
  const nav = document.querySelector('nav');
  const header = document.querySelector('header');

  burger.addEventListener('click', () => {
    navlinks.classList.toggle('active');
    nav.classList.toggle('active');
    header.classList.toggle('active');
    burger.classList.toggle('toggle');
  });

  navlinks.addEventListener('click', () => {
    navlinks.classList.remove('active');
    nav.classList.remove('active');
    header.classList.remove('active');
    burger.classList.remove('toggle');
  })
};

navSlide();