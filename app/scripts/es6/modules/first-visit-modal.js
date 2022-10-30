import { prefix } from '../helpers/constants';

export default () => {
  const $modal      = $(`.${prefix}-m-first-visit-modal #first-visit-modal`);
  const openDelay   = 10000;
  const closeDelay  = 13000;
  let isFirstVisit  = localStorage.getItem('isFirstVisit');

  // first visit
  if (isFirstVisit === null) {
    setTimeout(() => {
      $modal.modal('show');
    }, openDelay);

    $modal.on('shown.bs.modal', () => {
      setTimeout(() => {
        $modal.modal('hide');
      }, closeDelay);
    });
    isFirstVisit = false;
    localStorage.setItem('isFirstVisit', isFirstVisit);
  }
};
