import Swiper from '../../vendor/swiper';
const trainersSwiper = document.querySelector('.trainers__swiper');

const initTrainersSlider = () => {
  if (trainersSwiper) {
    (() =>
      new Swiper('.trainers__swiper', {
        direction: 'horizontal',
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

export {initTrainersSlider};


// export function initTrainersSwiper() {
//   const trainersSlider = new Swiper('.trainers__slider', { // eslint-disable-line
//     direction: 'horizontal',
//     loop: true,
//     spaceBetween: 33,
//     // centeredSlides: true,
//     grabCursor: true, // менять иконку курсора
//     // autoplay: {
//     //   delay: 5000,
//     // },
//     speed: 400,
//     navigation: {
//       nextEl: '.trainers__button--prev',
//       prevEl: '.trainers__button--next',
//     },
//     breakpoints: {
//       // when window width is >= 320px
//       320: {
//         slidesPerView: 1,
//       },
//       // when window width is >= 768px
//       768: {
//         slidesPerView: 2,
//       },
//       // when window width is >= 1199px
//       1199: {
//         slidesPerView: 4,
//         spaceBetween: 40,
//       },
//     },
//   });

  // const reviewsSlider = new Swiper('.reviews__slider', {
  //   direction: 'horizontal',
  //   slidesPerView: 1,
  //   spaceBetween: 33,
  //   centeredSlides: true,
  //   grabCursor: true, // менять иконку курсора
  //   // autoplay: {
  //   //   delay: 5000,
  //   // },
  //   // speed: 400,
  //   navigation: {
  //     nextEl: '.reviews__button-next',
  //     prevEl: '.reviews__button-prev',
  //   },
  // });
// }
