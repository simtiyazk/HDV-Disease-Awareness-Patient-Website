import { prefix } from '../helpers/constants';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
const selector =  `.${prefix}-m-what-are-the-signs-symptoms`;
const slider = document.querySelector('.symptomsSwiper');

export default () => {
  Swiper.use([Navigation, Pagination, Autoplay]);

  const sliderSym = new Swiper('.symptomsSwiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 60,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    breakpoints: {
      993: {
        slidesPerView: '3',
        spaceBetween: 141,
        centeredSlides: true
      }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: `${selector} .swiper-button-next`,
      prevEl: `${selector} .swiper-button-prev`
    }
  });

  const observerSlider = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      sliderSym.autoplay.start();
      return;
    }
    sliderSym.autoplay.stop();
  }, {
    root: null,
    threshold: 0.5
  });

  observerSlider.observe(slider);

};
