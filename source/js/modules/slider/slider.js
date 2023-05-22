import Swiper from '../../vendor/swiper';
const trainersSwiper = document.querySelector('.trainers__swiper');
const reviewSwiper = document.querySelector('.review__swiper');


const initTrainersSlider = () => {
  if (trainersSwiper) {
    (() =>
      new Swiper('.trainers__swiper', {
        direction: 'horizontal',
        loop: true,
        loopedSlides: 0,
        loopFillGroupWithBlank: true,
        watchSlidesProgress: true,
        observer: true,

        navigation: {
          nextEl: '.trainers__button--next',
          prevEl: '.trainers__button--prev',
        },

        keyboard: {
          enabled: true,
        },

        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1199: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        },

        on: {
          init() {
            const duplicateElements = trainersSwiper.querySelectorAll('.swiper-slide-duplicate');
            duplicateElements.forEach((item) => {
              item.setAttribute('tabindex', '-1');
            });
          },

          // slideChange() {
          //   trainersSwiper.querySelectorAll('.swiper-slide').forEach((item) => {
          //     item.setAttribute('tabindex', '-1');
          //   });

          //   let activeSlides = trainersSwiper.querySelectorAll('.swiper-slide-visible');
          //   activeSlides.forEach((item) => {
          //     item.setAttribute('tabindex', '0');
          //   });
          // },
        },

      })
    )();
  }

  if (reviewSwiper) {
    (() =>
      new Swiper('.review__swiper', {
        direction: 'horizontal',
        // loop: true,
        slidesPerView: 1,
        // centeredSlides: true,

        navigation: {
          nextEl: '.review__button--next',
          prevEl: '.review__button--prev',
        },
      })
    )();
  }
};

export {initTrainersSlider};
