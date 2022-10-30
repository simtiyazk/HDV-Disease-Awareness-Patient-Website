import $ from 'jquery';
import { gsap } from 'gsap/dist/gsap';

export default () => {
  const headlines = $('.hepd-m-hero_content__headlines h1');

  gsap.to(headlines, {
    rotationX: 0,
    opacity:1,
    repeatDelay: 3,
    repeat: -1,
    stagger:{
      each:3,
      onComplete:function() {
        gsap.to(this.targets()[0], {delay:2, opacity:0, rotateX:90});
      }
    }
  });

};


