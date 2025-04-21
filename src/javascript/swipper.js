
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 15,
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,

  breakpoints: {
    360: {
      slidesPerView: 2,
    },
    390: {
      slidesPerView: 2,
    },
    414: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    }
  }
});




document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".banner-swiper", {
    slidesPerView: "auto",
    spaceBetween: 10,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination-banner1",
      clickable: true,
    },
    initialSlide: 1,
  });
});