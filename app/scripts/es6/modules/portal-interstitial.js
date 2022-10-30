import $ from 'jquery';

export default () => {
  let externalLink = $('.portal-link');
  let papInterstitial = $('.pap-link');
  let externalAnchor = $('.portal_go');
  let interstitialModalPortal = $('#interstitialModalPortal');
  let interstitialModalPap = $('#interstitialModalPap');

  externalLink.on('click', e => {
    e.preventDefault();
    e.stopPropagation();
    let href = $(e.currentTarget).attr('href');
    $(interstitialModalPortal).appendTo('body').modal('show');

    externalAnchor.attr('href', href);
    interstitialModalPortal.modal();
  });

  papInterstitial.on('click', e => {
    e.preventDefault();
    e.stopPropagation();
    let href = $(e.currentTarget).attr('href');
    $(interstitialModalPap).appendTo('body').modal('show');

    externalAnchor.attr('href', href);
    interstitialModalPap.modal();
  });
};
