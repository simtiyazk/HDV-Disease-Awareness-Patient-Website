import $ from 'jquery';

export default () => {
  let externalLink = $('.external-link, .external-link-3rd');
  let externalAnchor = $('#external_go');
  let interstitialModal = $('#interstitial');

  externalLink.on('click', e => {
    e.preventDefault();
    e.stopPropagation();
    let href = $(e.currentTarget).attr('href');
    let classCheck = $(e.currentTarget).hasClass('external-link');

    if(classCheck === true) {
      $('.modal-text').hide();
    } else {
      $('.modal-text').show();
    }

    $(interstitialModal).appendTo('body').modal('show');

    // let host = window.location.host;
    let r = new RegExp('^(?:[a-z]+:)?//', 'i');

    if (r.test(href)) {
      externalAnchor.attr('href', href);
      interstitialModal.modal();
    }
    return false;
  });

  externalAnchor.on('click', () => {
    interstitialModal.modal('toggle');
  });

};
