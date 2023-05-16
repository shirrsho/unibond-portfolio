// const nav = document.querySelector('header');
// window.addEventListener('scroll', () => {
//   if (window.scrollY > 0) {
//     nav.classList.add('dark');
//     console.log("dark");
//   } else {
//     nav.classList.remove('dark');
//     console.log("no dark dark");
//   }
// });


const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
  });
};

navSlide();
