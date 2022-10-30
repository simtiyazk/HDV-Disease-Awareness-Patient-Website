import IScroll from 'iscroll';

const docEl = document.documentElement;
const bodyEl = document.body;
const expandIsi = document.querySelector('.expand-isi');
const expandTopIsiEl = document.querySelector('.expand-isi-top-portion');
const footerEl = document.querySelector('.footer');
const isiEl = document.querySelector('.isi-body-portion');
const isiMainContentEl = document.querySelector('.isi-body-portion .main-content');
const isiTopEl = document.querySelector('.isi-top-portion');
// set it "false" if you don't need a sidebar tray,
// should be an intenger number that represents the
// breakpoint on which the sidebar tray should
// dissappear
const minScreenSizeForTray = 1200;
const scrollWrapperEl = document.querySelector('.scroll-wrapper');
const scrollContainerEl = document.querySelectorAll('.isi.tray');

let iScroll;
let hasScrolled;
export default () => {
  if (minScreenSizeForTray) {
    setUpScroll();

    iScroll.on('scrollStart', scrollRefresh);
    window.addEventListener('resize', updateScrollDimensions);
  }

  // If the footer ISI is visible on the page, avoid
  // overlapping from the tray
  if (docEl.scrollHeight === window.innerHeight) {
    hideTray();
  }

  window.addEventListener('scroll', handleScroll);

  expandIsi.addEventListener('click', expandIsiSection);
  expandTopIsiEl.addEventListener('click', expandTopIsiSection);
};

const expandIsiSection = () => {
  bodyEl.classList.contains('overflow-hidden') ? bodyEl.classList.remove('overflow-hidden') : bodyEl.classList.add('overflow-hidden');
  bodyEl.classList.contains('position-fixed') ? bodyEl.classList.remove('position-fixed') : bodyEl.classList.add('position-fixed');
  expandIsi.classList.contains('expanded') ? expandIsi.classList.remove('expanded') : expandIsi.classList.add('expanded');
  isiEl.classList.contains('expanded') ? isiEl.classList.remove('expanded') : isiEl.classList.add('expanded');
  isiTopEl.classList.contains('update-position') ? isiTopEl.classList.remove('update-position') : isiTopEl.classList.add('update-position');
  iScroll.destroy();
  setUpScroll();
};

const expandTopIsiSection = () => {
  expandTopIsiEl.classList.contains('expanded') ? expandTopIsiEl.classList.remove('expanded') : expandTopIsiEl.classList.add('expanded');
  isiTopEl.classList.contains('expanded') ? isiTopEl.classList.remove('expanded') : isiTopEl.classList.add('expanded');
};

const handleScroll = () => {
  const footerHeight = ~~footerEl.clientHeight - 100;
  const docHeight = docEl.scrollHeight;
  const windowHeight = window.innerHeight;
  const windowScrollTop = (window.pageYOffset || docEl.scrollTop) - (docEl.clientTop || 0);
  const scrollLimit = docHeight - (windowHeight + windowScrollTop);

  footerHeight > scrollLimit ? hideTray() : showTray();

  if (windowScrollTop < 170) {
    showTray();
  }
};

const hideTray = () => {
  Array.prototype.slice.call(scrollContainerEl).forEach(element => {
    element.classList.add('hide-tray');
  });
};

const setUpScroll = () => {
  const clientHeightEl = document.documentElement.clientHeight;
  const isiMainContentPosition = isiMainContentEl.getBoundingClientRect().y || isiMainContentEl.getBoundingClientRect().top;
  const isiMainContentHeight = clientHeightEl - isiMainContentPosition;

  isiMainContentEl.style.height = `${isiMainContentHeight}px`;

  iScroll = new IScroll(scrollWrapperEl, {
    scrollbars: 'custom',
    interactiveScrollbars: true,
    mouseWheel: true,
    click: true,
    disableTouch: false
  });

  // Auto-refreshing the iScroll object after 4 miliseconds
  // this isn't a best practice but is used due an issue
  // on calc that the IScroll library makes in some browsers.
  setTimeout(() => {
    iScroll.refresh();
  }, 400);
};

const showTray = () => {
  Array.prototype.slice.call(scrollContainerEl).forEach(element => {
    element.classList.remove('hide-tray');
  });
};

const scrollRefresh = () => {
  if (!hasScrolled) {
    iScroll.refresh();
  }
  hasScrolled = true;
};

const updateScrollDimensions = () => {
  iScroll.destroy();
  setUpScroll();

  if (docEl.clientWidth > minScreenSizeForTray) {
    isiTopEl.classList.remove('update-position');
    isiEl.classList.remove('expanded');
    bodyEl.classList.remove('overflow-hidden');
  }
};
