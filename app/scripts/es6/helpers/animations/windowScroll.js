import {
  $window,
  $header
} from './consts';

export let headerOffset = 0;
let headerWrapOffset = 0;


export function windowscroll() {
  if ($header.length > 0) {
    headerOffset = $header.offset().top;
    headerWrapOffset = $header.offset().top;
  }

  const headerDefinedOffset = $header.attr('data-sticky-offset');
  if (typeof headerDefinedOffset !== 'undefined') {
    if (headerDefinedOffset === 'full') {
      headerWrapOffset = $window.height();
      const headerOffsetNegative = $header.attr('data-sticky-offset-negative');
      if (typeof headerOffsetNegative !== 'undefined') {
        headerWrapOffset = headerWrapOffset - headerOffsetNegative - 1;
      }
    } else {
      headerWrapOffset = Number(headerDefinedOffset);
    }
  }
}

export function debounce(func, wait, immediate) {
  let timeout;
  let args;
  let context;
  let timestamp;
  let result;

  return function() {
    context = this;
    args = arguments;
    timestamp = new Date();
    const later = function() {
      const last = new Date() - timestamp;
      if (last < wait) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
        }
      }
    };
    const callNow = immediate && !timeout;
    if (!timeout) {
      timeout = setTimeout(later, wait);
    }
    if (callNow) {
      result = func.apply(context, args);
    }
    return result;
  };
}

window.requesting = false;

export let killRequesting = debounce(function() {
  window.requesting = false;
}, 100);

