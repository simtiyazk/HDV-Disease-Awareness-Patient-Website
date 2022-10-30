import { prefix } from '../helpers/constants';

export default () => {

  const $clickableSection = $('.leaving-modal-trigger');
  const $leaveButton      = $(`.${prefix}-m-exit-modal .modal-leave-btn`);
  let urlToRedirectTo;

  $clickableSection.on('click', function(e) {
    e.preventDefault();
    let $this = $(this);
    urlToRedirectTo = $this.attr('modal-url');
  });

  $leaveButton.on('click', function(e) {
    e.preventDefault();
    window.open(urlToRedirectTo, '_blank');
    $leaveButton.parents('.modal').modal('hide');
  });
};