import { floodlightClass, internalLinkClass } from '../helpers/';
import { prefix } from '../helpers/constants';
import { $window } from '../helpers/animations/consts';

export default () => {
  const floodlightTag = $(`.${ floodlightClass }`);
  const internalLinkTag = $(`.${ internalLinkClass }`);
  const externalLinkTag = $('[class^="track-external-"], [class*=" track-external-"]');
  const exitModal = $(`.${ prefix }-m-exit-modal`);

  floodlightTag.on('click', (el) => {
    const currentTarget = $(el.currentTarget);
    const elType = currentTarget.attr('data-type');
    const elCat = currentTarget.attr('data-category');

    callFloodlightNew(elType, elCat);
  });

  internalLinkTag.on('click', (e) => {
    e.preventDefault();

    const link = $(e.currentTarget);
    const linkHref = link.attr('href');

    callFloodlightNew('intType', 'intCat');
    setTimeout(() => {
      window.location = linkHref;
    }, 200);
  });

  externalLinkTag.on('click', (e) => {

    const currentTarget = $(e.currentTarget);
    const elType = currentTarget.attr('data-type');
    const elCat = currentTarget.attr('data-category');

    exitModal.find('.modal-leave-btn').attr({'data-type': elType, 'data-category': elCat});

  });

  $window.on('load', triggerPageLoadTag);
};

export const triggerPageLoadTag = () => {
  const pageClass = $('body').attr('class');
  const currentUrl = window.location.pathname.split('/');
  const paramArray = currentUrl.filter((el) => el !== '');
  const pagePath = paramArray.pop();

  let type = 'Conv';
  let category = false;

  switch(true) {
    case pagePath === 'test-page':
      category = 'test123';
      break;
    default:
      if (typeof pagePath === 'undefined' && pageClass.includes('home-page')) {
        category = 'test0';
      }
      break;
  }

  if(category) {
    callFloodlightNew(type, category);
  }
};

export const callFloodlightNew = (type, cat) => {
  const floodlightSrc = '1234567';
  const tag_url = `https://ad.doubleclick.net/ddm/activity/src=${floodlightSrc};type=${type};cat=${cat};dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;num=${Math.floor(1000000000 + Math.random() * 9000000000)};ord=1;?`;
  let flDiv = '';
  if (document.getElementById('DCLK_FLDiv')) {
    flDiv = document.getElementById('DCLK_FLDiv');
  } else {
    flDiv = document.body.appendChild(document.createElement('div'));
    flDiv.id = 'DCLK_FLDiv';
    flDiv.style.display = 'none';
  }
  let DCLK_FLImg = document.createElement('img');
  DCLK_FLImg.id = `DCLK_FLIframe_${Math.floor(Math.random() * 999999)}`;
  DCLK_FLImg.src = tag_url;
  DCLK_FLImg.width = 1;
  DCLK_FLImg.height = 1;
  flDiv.appendChild(DCLK_FLImg);
};
