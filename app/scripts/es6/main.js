import $ from 'jquery';
import 'babel-polyfill';
import nav from './modules/nav';
import heroAnima from './modules/hero-anima';
import heroNav from './modules/hero-nav';
import interstitial from './modules/interstitial';
import riskModal from './modules/riskSlider';
import symptomsSlider from './modules/symptomsSlider';
import liverSlider from './modules/liverSlider';
import surveyModal from './modules/survey-modal';

//Vendors
require('bootstrap/dist/js/bootstrap.min.js');
require('bootstrap-select');
//end vendors

$(() => {
  if($('.patient-page').length) {
    nav();
    symptomsSlider();
    liverSlider();
    riskModal();
    heroNav();
    heroAnima();
    $('.symptomsSwiper .swiper-button-next, .symptomsSwiper .swiper-button-prev, .symptomsSwiper .swiper-pagination-bullet').attr('data-analytics-event-label', 'What are the signs of hep delta');
    $('.hepd-m-what-are-the-signs-liver__content .swiper-button-next,.hepd-m-what-are-the-signs-liver__content .swiper-button-prev, .hepd-m-what-are-the-signs-liver__content .swiper-pagination-bullet').attr('data-analytics-event-label', 'Your Liver and hep delta');
  }
  interstitial();
  surveyModal();
});


$('.hepd-m-support-resources_cards_item').on('click', function() {
    const url = $(this).find('a').attr('href');
    const el = $(this).find('a');

    // Create a new link
    let anchor = document.createElement('a');
    anchor.className = el.attr('class');
    anchor.href = url;
    anchor.download = '';

    // Append to the DOM
    document.body.appendChild(anchor);

      const externalLink = $('.external-link, .external-link-3rd');
      const externalAnchor = $('#external_go');
      const interstitialModal = $('#interstitial');

      externalLink.on('click', e => {
        e.preventDefault();
        e.stopPropagation();
        const classCheck = $(e.currentTarget).hasClass('external-link');

        if(classCheck === true) {
          $('.modal-text').hide();
        } else {
          $('.modal-text').show();
        }

        externalAnchor.attr('href', url);
        $(interstitialModal).modal('show');
        return false;
      });

      externalAnchor.on('click', () => {
        interstitialModal.modal('toggle');
      });

    // Trigger `click` event
    anchor.click();

    // Remove element from DOM
    document.body.removeChild(anchor);

});