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
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
  });
};

navSlide();