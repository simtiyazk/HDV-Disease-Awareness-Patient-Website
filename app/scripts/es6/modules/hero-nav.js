import $ from 'jquery';
import { prefix } from '../helpers/constants';

export default () => {
  const arrow = $(`.${prefix}-c-hero-nav_link img`);

  $('.collapse-group').on('show.bs.collapse', function() {
    arrow.css({'transform' : 'rotate(180deg)'});
  });

  $('.collapse-group').on('hidden.bs.collapse', function() {
    arrow.css({'transform' : 'rotate(0deg)'});
  });
};
