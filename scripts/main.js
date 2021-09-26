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

$('.filter-tabs li').click(function() {
  $(this).addClass('active').siblings().removeClass('active')
  let attr = $(this).text().toLowerCase()

  $(`.shop-list .shop-col`).hide()

  if(attr == 'all') {
    $(`.shop-list .shop-col`).show()
  } else {
    $(`.shop-list .shop-col[data-attr="${attr}"]`).show()
  }
})