const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    speed: 2000,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    autoplay: {
        delay: 5000,
    },
  });