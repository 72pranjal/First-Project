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

// script for mobile footer

const showList1 = document.querySelector(".click-h1");
const showList2 = document.querySelector(".click-h2");
const showList3 = document.querySelector(".click-h3");
const showList4 = document.querySelector(".click-h4");

const listFirst = document.querySelector(".list1");
const listSceond = document.querySelector(".list2");
const listThird = document.querySelector(".list3");
const listFourth = document.querySelector(".list4");

showList1.addEventListener("click", () => {
  if (listFirst.style.display === "block") {
    listFirst.style.display = "none";
  } else {
    listFirst.style.display = " block";
  }
});

showList2.addEventListener("click", () => {
  if (listSceond.style.display === "block") {
    listSceond.style.display = "none";
  } else {
    listSceond.style.display = " block";
  }
});

showList3.addEventListener("click", () => {
  if (listThird.style.display === "block") {
    listThird.style.display = "none";
  } else {
    listThird.style.display = " block";
  }
});

showList4.addEventListener("click", () => {
  if (listFourth.style.display === "block") {
    listFourth.style.display = "none";
  } else {
    listFourth.style.display = " block";
  }
});
