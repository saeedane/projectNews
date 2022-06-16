var swiper = new Swiper(".videoSlider", {
  slidesPerView: 4,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".newsTopSlider", {
  autoplay:{delay:5000},
  spaceBetween: 30,

  navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},

});


var swiper=new Swiper("#newsTopSlider",{autoplay:{delay:5e3},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})