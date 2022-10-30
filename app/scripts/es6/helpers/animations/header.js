import $ from 'jquery';
import superfish from 'superfish';
import {
  $window,
  $header,
  $body,
  $headerWrap,
  oldHeaderClasses,
  oldHeaderWrapClasses,
  stickyMenuClasses,
  responsiveMenuClasses
} from './consts';

let isSuperFishInitalized = false;

export function headerInit() {
  superfishInit();
  stickyMenu();
}

export function superfishInit() {
  if (!$().superfish && typeof(superfish) !== 'function') {
    $body.addClass('no-superfish');
    return true;
  }
  if ($body.hasClass('device-xl') || $body.hasClass('device-lg') && !isSuperFishInitalized) {
    $('.navbar-nav').superfish({
      popUpSelector: '.submenu',
      delay: 250,
      speed: 350,
      animation: { opacity: 'show' },
      animationOut: { opacity: 'hide' },
      cssArrows: false,
      onShow: function() {
        const megaMenuContent = $(this);
        if (
          megaMenuContent.hasClass('mega-menu-content') &&
          megaMenuContent.find('.widget').length > 0
        ) {
          if ($body.hasClass('device-xl') || $body.hasClass('device-lg')) {
            setTimeout(function() {
            }, 200);
          }
        }
      }
    });
    isSuperFishInitalized = true;
  }else{
    isSuperFishInitalized && $('.navbar-nav').superfish('destroy');
    isSuperFishInitalized = false;
  }
}

export function stickyMenu(headerOffset) {
  if ($window.scrollTop() > headerOffset) {
    if ($body.hasClass('device-xl') || $body.hasClass('device-lg')) {
      $('body:not(.side-header) #header:not(.no-sticky)').addClass(
        'sticky-header'
      );
      if (!$headerWrap.hasClass('force-not-dark')) {
        $headerWrap.removeClass('not-dark');
      }
      stickyMenuClass();
    } else if (
      $body.hasClass('device-sm') ||
      $body.hasClass('device-xs') ||
      $body.hasClass('device-md')
    ) {
      if ($body.hasClass('sticky-responsive-menu')) {
        $('#header:not(.no-sticky)').addClass('responsive-sticky-header');
        stickyMenuClass();
      }
    }
  } else {
    removeStickyness();
  }
}

export function removeStickyness() {
  if ($header.hasClass('sticky-header')) {
    $('body:not(.side-header) #header:not(.no-sticky)').removeClass(
      'sticky-header'
    );
    $header.removeClass().addClass(oldHeaderClasses);
    $headerWrap.removeClass().addClass(oldHeaderWrapClasses);
    if (!$headerWrap.hasClass('force-not-dark')) {
      $headerWrap.removeClass('not-dark');
    }
  }
  if ($header.hasClass('responsive-sticky-header')) {
    $('body.sticky-responsive-menu #header').removeClass(
      'responsive-sticky-header'
    );
  }
  if (
    ($body.hasClass('device-sm') ||
      $body.hasClass('device-xs') ||
      $body.hasClass('device-md')) &&
    typeof responsiveMenuClasses === 'undefined'
  ) {
    $header.removeClass().addClass(oldHeaderClasses);
    $headerWrap.removeClass().addClass(oldHeaderWrapClasses);
    if (!$headerWrap.hasClass('force-not-dark')) {
      $headerWrap.removeClass('not-dark');
    }
  }
}

export function stickyMenuClass() {
  let newClassesArray;
  if (stickyMenuClasses) {
    newClassesArray = stickyMenuClasses.split(/ +/);
  } else {
    newClassesArray = '';
  }
  const noOfNewClasses = newClassesArray.length;

  if (noOfNewClasses > 0) {
    let i = 0;
    for (i = 0; i < noOfNewClasses; i++) {
      if (newClassesArray[i] === 'not-dark') {
        $header.removeClass('dark');
        $headerWrap.addClass('not-dark');
      } else if (newClassesArray[i] === 'dark') {
        $headerWrap.removeClass('not-dark force-not-dark');
        if (!$header.hasClass(newClassesArray[i])) {
          $header.addClass(newClassesArray[i]);
        }
      } else if (!$header.hasClass(newClassesArray[i])) {
        $header.addClass(newClassesArray[i]);
      }
    }
  }
}
