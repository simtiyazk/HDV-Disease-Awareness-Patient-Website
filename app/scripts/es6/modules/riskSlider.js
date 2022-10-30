import { prefix } from '../helpers/constants';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
const selectorSpread =  `.${prefix}-m-who-is-at-risk-spread__swiper`;
const selectorFrom =  `.${prefix}-m-who-is-at-risk-from__swiper`;
const sliderSpread = document.querySelector(selectorSpread);
const sliderFrom = document.querySelector(selectorFrom);


export default () => {
  Swiper.use([Navigation, Pagination, Autoplay]);

  const swiperSpread  = new Swiper(selectorSpread, {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 60,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: `${selectorSpread} .swiper-button-next`,
      prevEl: `${selectorSpread} .swiper-button-prev`
    }
  });

  const swiperFrom  = new Swiper(selectorFrom, {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: `${selectorFrom} .swiper-button-next`,
      prevEl: `${selectorFrom} .swiper-button-prev`
    }
  });

  const observerSliderSpread = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      swiperSpread.autoplay.start();
      return;
    }
    swiperSpread.autoplay.stop();
  }, {
    root: null,
    threshold: 0.5,
  });

  observerSliderSpread.observe(sliderSpread);

  const observerSliderFrom = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      swiperFrom.autoplay.start();
      return;
    }
    swiperFrom.autoplay.stop();
  }, {
    root: null,
    threshold: 0.5,
  });

  observerSliderFrom.observe(sliderFrom);
};
