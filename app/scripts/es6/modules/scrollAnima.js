import $ from 'jquery';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default () => {
  if ($('#patient-page').length > 0 || $('#hcp-page').length > 0) {

    // animate elements on scroll

    gsap.utils.toArray('._scroll-animated').forEach(function(elem) {
      gsap.set(elem, {y: '+=50', opacity:0});

      ScrollTrigger.batch(elem, {
        trigger: elem,
        start: 'top bottom-=200px',
        onEnter: batch => gsap.to(batch, {duration:0.8, opacity: 1, y:0, stagger: 0.5, ease: 'back.out(1.1)', overwrite: true}),
      });

      ScrollTrigger.addEventListener('refreshInit', () => gsap.set(elem, {y: 0}));
    });
  }
};
