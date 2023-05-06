// import Swiper from '../../vendor/swiper';
const trainersSwiper = document.querySelector('.trainers__swiper');

const initTrainersSwiper = () => {
  if (trainersSwiper) {
    (() =>
      new Swiper('.trainers__swiper', {
        direction: 'horisontal',
        loop: true,

        navigation: {
          nextEl: '.trainers__button--prev',
          prevEl: '.trainers__button--next',
        },

        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 1199px
          1199: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        },
      })
    )();
  }
}

export {initTrainersSwiper};
