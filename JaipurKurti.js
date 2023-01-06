const showNav = document.querySelector("#showMobileNav");
const hideNav = document.querySelector(".cross-icon");
const div = document.querySelector(".show-in-mobileView");

// Show Side nav bar when click on side nav icon
showNav.addEventListener("click", () => {
  div.style.display = "block";
});

// Hide side nav bar when click on cross icon
hideNav.addEventListener("click", () => {
  div.style.display = "none";
});

// Owl carousel applied in banner image
$(".owl-banner").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  smartSpeed: 1000,
  items: 1,
});

// Owl carousel applied in new arraivals sections
$(".owl-arrivals").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  smartSpeed: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

// Owl carousel applied in best sellers sections
$(".owl-sellers").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  smartSpeed: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});
