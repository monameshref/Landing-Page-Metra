//! AOS library
AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: false,
  mirror: true
});

//! ================================ Navbar ================================ //
const menuBtn = document.querySelector(".menu-btn");
const responsiveNav = document.querySelector("nav.responsive");
const closeIcon = document.querySelector(".close-icon");
const overlay = document.querySelector(".overlay");
const navLinks = document.querySelectorAll("ul.links li");


menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  responsiveNav.classList.add("active");
  overlay.classList.add("show");
});

closeIcon.addEventListener("click", () => {
  responsiveNav.classList.remove("active");
  overlay.classList.remove("show");
});

overlay.addEventListener("click", () => {
  responsiveNav.classList.remove("active");
  overlay.classList.remove("show");
});

responsiveNav.addEventListener("click", (e) => {
  e.stopPropagation();
});

// ****** Active Link ****** //
navLinks.forEach((li) => {
  li.addEventListener("click", () => {
    navLinks.forEach(item => item.classList.remove("active"));
    li.classList.add("active");
  });
});


// ****** Navbar Sticky ****** //
const nav = document.querySelector(".bottom-nav");
const container = document.querySelector(".image-banner ");

window.addEventListener("scroll", () => {
    if (window.scrollY > 120) {
        nav.classList.add("sticky");
        container.style.marginTop = "80px";
    } else {
        nav.classList.remove("sticky");
        container.style.marginTop = "0px";
    }
});

//! ================================ Banner Header ================================ //
$(document).ready(function () {
    $('.image-banner').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,

        autoplayTimeout: 5000,
        smartSpeed: 1600,

        autoplayHoverPause: false,
        nav: false,
        dots: true,

        animateIn: 'animate__zoomIn',
        animateOut: 'animate__fadeOut'

        // animateIn: 'animate__fadeInUp',
        // animateOut: 'animate__fadeOutDown'
    });
});


$(".partners-carousel").owlCarousel({
  loop: true,
  nav: true,
  items: 5,
  dots: false,
  margin: 30,

  autoplay: true,
  autoplayTimeout: 2500,
  autoplaySpeed: 5000, // Smooth transition speed (ms)
  slideTransition: "linear", // Optional: makes the transition linear

  rtl: true,
  responsive: {
    0: {
      items: 2,
      margin: 10,
    },
    600: {
      items: 3,
      margin: 10,
    },
    1000: {
      items: 5.5,
      margin: 30,
    },
  },
});


//! ================================ Scroll Animation ================================ //
window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger);

  let panels = gsap.utils.toArray(".my-card");
  let tops = panels.map(panel => ScrollTrigger.create({ trigger: panel, start: "top top" }));

  panels.forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel,
      start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
      pin: true,
      pinSpacing: false
    });
  });
});