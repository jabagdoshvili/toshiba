var swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

AOS.init();


$('.sm-menu-bar-icon').click(function() {
  $('.mobile-menu').addClass('visible')
})

$('.mobile-menu > img').click(function() {
  $('.mobile-menu').removeClass('visible')
})