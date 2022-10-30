import { prefix } from '../helpers/constants';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
const selector =  `.${prefix}-m-what-are-the-signs-liver`;
const slider = document.querySelector('.liverSwiper');

export default () => {
  Swiper.use([Navigation, Pagination, Autoplay]);
  const liverSwiper = new Swiper('.liverSwiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 45,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
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
      liverSwiper.autoplay.start();
      return;
    }
    liverSwiper.autoplay.stop();
  }, {
    root: null,
    threshold: 0.5,
  });

  observerSlider.observe(slider);

};
