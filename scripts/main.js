const contactData = [{
    attr: 'luzon',
    title: 'Sandhya Mer',
    desc: 'NEW YORK',
    phone: '5555555',
    social: 'https://www.facebook.com/'
  },
  {
    attr: 'luzon',
    title: 'Martin B.',
    desc: 'CALIFONIA',
    phone: '5555555',
    social: 'https://www.facebook.com/'
  },
  {
    attr: 'luzon',
    title: 'Krish Marasigan',
    desc: 'PASIG CITY',
    phone: '5555555',
    social: 'https://www.facebook.com/'
  },
  {
    attr: 'luzon',
    title: 'Cole Ochasa',
    desc: 'PARANAQUE CITY',
    phone: '5555555',
    social: 'https://www.facebook.com/'
  },
  {
    attr: 'luzon',
    title: 'Meg Sabastian',
    desc: 'SAN JUGAN CITY',
    phone: '5555555',
    social: 'https://www.facebook.com/'
  },
  {
    attr: 'luzon',
    title: 'Sarah Jean Jutto',
    desc: 'BATANGAS',
    phone: '5555555',
    social: 'https://www.facebook.com/'
  },
  {
    attr: 'luzon',
    title: 'Frankie Fransico',
    desc: 'ANTIPOLO CITY',
    phone: '5555555',
    social: 'https://www.facebook.com/'
  },
  {
    attr: 'luzon',
    title: 'David Jonhson',
    desc: 'BERLIN',
    phone: '5555555',
    social: 'https://www.facebook.com/'
  },
  {
    attr: 'visayas',
    title: 'Meg Sabastian',
    desc: 'SAN JUGAN CITY',
    phone: '5555555',
    social: 'https://www.facebook.com/'
  },
  {
    attr: 'visayas',
    title: 'Sarah Jean Jutto',
    desc: 'BATANGAS',
    phone: '5555555',
    social: 'https://www.facebook.com/'
  },
  {
    attr: 'visayas',
    title: 'Frankie Fransico',
    desc: 'ANTIPOLO CITY',
    phone: '5555555',
    social: 'https://www.facebook.com/'
  },
  {
    attr: 'visayas',
    title: 'David Jonhson',
    desc: 'BERLIN',
    phone: '5555555',
    social: 'https://www.facebook.com/'
  },
  {
    attr: 'mindanao',
    title: 'Sarah Jean Jutto',
    desc: 'BATANGAS',
    phone: '5555555',
    social: 'https://www.facebook.com/'
  },
  {
    attr: 'mindanao',
    title: 'Frankie Fransico',
    desc: 'ANTIPOLO CITY',
    phone: '5555555',
    social: 'https://www.facebook.com/'
  },
  {
    attr: 'mindanao',
    title: 'David Jonhson',
    desc: 'BERLIN',
    phone: '5555555',
    social: 'https://www.facebook.com/'
  }
]

function setData() {
  contactData.forEach((el, ind) => {
    let { title, desc, phone, social, attr } = el
    $('.shop-list').append(`
      <div class="shop-col" data-attr="${attr}">
        <img src="/assets/images/icons/icon.png" alt="">
        <h5>${title}</h5>
        <span>${desc}</span>
        <ul>
          <li><a href="tel:${phone}"><img src="/assets/images/icons/Phone.png" alt=""></a></li>
          <li><a href="${social}" target="_blank"><img src="/assets/images/icons/fb.png" alt=""></a></li>
        </ul>
        <div class="obj">
          <img src="/assets/images/partials/prime.png" alt="">
        </div>
      </div>
    `)
  })
}
setData()

void
function InitDomEvents() {

  $('.sm-menu-bar-icon').click(function() {
    $('.mobile-menu').toggleClass('visible')
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

}()

void
function Init() {

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

}()
