import { prefix, floodlightClass, internalLinkClass } from '../scripts/es6/helpers/';

import patient from '../_pages/';
import error404Page from '../_pages/404';
import thankYou from '../_pages/thank-you';

module.exports = {
  global: {
    prefix,
    floodlightClass,
    internalLinkClass,
    ga: {
      enabled: false,
      id: 'UA-XXXXX-Y'
    },
    gtm: {
      enabled: true,
      id: 'GTM-5CVL94C'
    },
    fb: {
      enabled: false,
      id: '111111111111111'
    },
    fl: {
      enabled: false,
      id: '1234567'
    },
    cookie: {
      enabled: false
    },
    modals: {
      firstVisitModal: {
        enabled: true,
        id: 'first-visit-modal',
        bodyCopy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum varius nisi a lobortis. Morbi est nulla, ultrices ac leo sit amet, tincidunt laoreet mauris. Ut in imperdiet erat. Morbi iaculis lectus id tellus fringilla, vitae cursus mauris luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
      },
      exitModal: {
        enabled: false,
        id: 'exit-modal',
        bodyCopy1: 'You are leaving the current site.',
        bodyCopy2: 'Click below if you wish to proceed.'
      }
    },
    nav: {
      logo: {
        link: '/',
        src: '/images/global/logo.svg',
        alt: ''
      },
      links: [
        {
          title: 'What is hep delta?',
          data_url: 'what-is-hep-delta',
          href: '#what-is-hep-delta',
          hrefMisc: '/#what-is-hep-delta',
          class: '',
          show: true
        },
        {
          title: 'Who is at risk?',
          data_url: 'who-is-at-risk',
          href: '#who-is-at-risk',
          hrefMisc: '/#who-is-at-risk',
          class: '',
          show: true
        },
        {
          title: 'What are the signs?',
          data_url: 'what-are-the-signs',
          href: '#what-are-the-signs',
          hrefMisc: '/#what-are-the-signs',
          class: '',
          show: true
        },
        {
          title: 'How do you test for it?',
          data_url: 'how-do-you-test-for-it',
          href: '#how-do-you-test-for-it',
          hrefMisc: '/#how-do-you-test-for-it',
          class: '',
          show: true
        },
        {
          title: 'Support resources',
          data_url: 'support-resources',
          href: '#support-resources',
          hrefMisc: '/#support-resources',
          class: '',
          show: true
        },
        {
          title: 'Survey',
          data_url: 'survey',
          href: '#survey',
          hrefMisc: '/#survey',
          class: '',
          show: false
        }
      ]
    },
    footer: {
      logo: {
        image: '/images/global/Gilead_Logo_KO.svg',
        alt: 'Link to Gilead.com',
        href: 'https://www.gilead.com/'
      },
      footerLinks: [
        {
          text: 'Privacy Policy',
          href: 'https://www.gilead.com/privacy-statements',
          external: true
        },
        {
          text: 'Terms of Use',
          href: 'https://www.gilead.com/terms',
          external: true
        },
        {
          text: 'Contact Us',
          href: 'https://www.gilead.com/utility/contact',
          external: true
        },
        {
          text: 'About Us',
          href: 'https://www.gilead.com/',
          external: true
        }
      ],
      footerTexts: [
        'GILEAD and the GILEAD Logo are trademarks of Gilead Sciences, Inc. or its related companies.',
        'All other trademarks referenced herein are the property of their respective owners.',
        '©2022 Gilead Sciences, Inc. All rights reserved. US-UNBC-0242 03/22'
      ]
    }
  },
  pages: {
    patient,
    error404Page,
    thankYou
  }
};
