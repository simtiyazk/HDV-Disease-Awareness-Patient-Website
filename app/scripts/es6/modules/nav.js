import $ from 'jquery';
import { prefix } from '../helpers/constants';
import { isAnyMobile } from '../helpers/animations/isMobile';

export default () => {
  const $window = $(window);
  const $navBarWrapperMob = $(`.${prefix}-c-nav-mob`);
  const $navBarWrapperDesk = $(`.${prefix}-c-nav-desk`);
  const $navLinks = $(`.scroll-to a, .${prefix}-c-nav-desk_link, .${prefix}-c-nav-mob_link, .${prefix}-c-hero-nav_list__item.collapse-group a, .${prefix}-c-scroll-to-next a`);
  const navLinkItems = document.querySelectorAll(`.${prefix}-c-nav-desk_list__item, .${prefix}-c-nav-mob_list__item`);
  const sections = document.querySelectorAll('.section');
  const heroNav = document.querySelector(`.${prefix}-c-hero-nav`);
  const mobNav = document.querySelector(`.${prefix}-c-nav-mob`);
  const heroSection = document.querySelector(`.${prefix}-m-hero`);
  const mobNabScroller = $(`.${prefix}-c-nav-mob`);
  const mediaQuery = window.matchMedia('(max-width: 800px)');

  // add class on hover menu
  $(`.${prefix}-c-nav-desk_list__item`).hover(
    function() { $(this).addClass('hover'); },
    function() { $(this).removeClass('hover'); }
  );

  function menuShow() {
    if (isAnyMobile() && mediaQuery.matches) {
      const observerNav = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          heroNav.classList.add('show');
          heroNav.classList.remove('hide');
          mobNav.classList.remove('show');
          return;
        }
        heroNav.classList.remove('show');
        heroNav.classList.add('hide');
        mobNav.classList.add('show');
      }, {
        root: null,
        threshold: 0.5
      });
      observerNav.observe(heroSection);
    }
  }

  menuShow();

  window.addEventListener('resize', function() {
    menuShow();
  });

  // window.addEventListener('orientationchange', function() {
  //   menuShow();
  // });

  // add active to section
  const fnObserver = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinkItems.forEach(link => {

          link.classList.remove('active');

          // add class to li nav
          if(entry.target.id === link.dataset.url) {
            link.classList.add('active');
            // scroll left nav to active item
            const liActive = navLinkItems;
            const sources = Array.from(liActive).filter(item => entry.target.id.includes(item.dataset.url));
            let offsetScrollValue = sources[1].getBoundingClientRect().left + 3;
            mobNabScroller.stop().animate({ scrollLeft:`+=${offsetScrollValue}`}, 100);
          }
        });
      }
    });
  };

  const observer = new IntersectionObserver(fnObserver, {
    root: null,
    threshold: 0.3
  });

  sections.forEach(section => observer.observe(section));

  const goToSection = (hash) => {
    let target = hash;
    let $target = $(target);
    let offset = 0;
    let navBarWrapper;

    if($target.length) {

      if(isAnyMobile()) {
        offset = parseInt($('.hepd-c-nav-mob_list').css('margin-bottom')) + 3;
        navBarWrapper = $navBarWrapperMob;
      } else {
        offset = parseInt($('.hepd-c-nav-desk').css('padding-top')) + 30;
        navBarWrapper = $navBarWrapperDesk;
      }

      let $navBarHeight = navBarWrapper.height() - offset;
      let $pos = 0;
      let $st = $(window).scrollTop();
      let $time = 0;
      $pos = $target.offset().top;
      $pos -= $navBarHeight;
      $time = ($pos > $st) ?  Math.abs(($pos - $st)) : Math.abs(($st - $pos));

      $('html, body').animate({
        'scrollTop': $pos
      }, $time - 200);
    }
  };

  $window.on('load', () => {
    goToSection(window.location.hash, 0);
  });

  $navLinks.on('click', (e) => {
    const clickedEl = e.currentTarget.hash;
    const clickedURL = e.target.getAttribute('href').includes('/');

    if(!clickedURL) {
      goToSection(clickedEl);
      e.preventDefault();
      return false;
    }

  });
};
