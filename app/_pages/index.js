
export default {
  name: 'hepd',
  page_url: '/hepd/',
  prefixPage: 'hepd',
  hero: {
    headline: ['Hepatitis Delta', 'Hep Delta', 'Hep D', 'Hepatitis D', 'HDV'],
    subheadline: 'Hep delta goes by many names. No matter what you call it, you’ve come to the right place for information.',
    hero_img_mob: 'hero-illustration-mobi.svg',
    hero_img_desk: 'hero-illustration.svg',
    hero_img_alt: 'People wondering what hep delta is',
    next_section: 'what-is-hep-delta'
  },
  whatIsHepDelta: {
    headline: 'What is hep delta?',
    subheadline: 'Hep delta harms<br><span>the liver</span>',
    content: 'Only people who get hep B <br>can get hep delta.',
    information: 'The liver has more than 300 jobs that keep you healthy. Some of its most important jobs are:',
    columns: [
      {
        text:'Protecting against sickness',
        icon:'images/modules/what-is-hep-delta/what-illus-2.svg',
        alt:'Shield icon represents liver protecting against disease '
      },
      {
        text:'Making energy from&nbsp;food',
        icon:'images/modules/what-is-hep-delta/what-illus-3.svg',
        alt:'Battery icon represents liver making energy'
      },
      {
        text:'Getting rid&nbsp;of&nbsp;bad materials',
        icon:'images/modules/what-is-hep-delta/what-illus-4.svg',
        alt:'Toxic icon represents liver getting rid of toxins '
      }
    ],
    message: 'Even if you can\'t feel it, hep&nbsp;delta could be harming&nbsp;your liver. <strong>Learn&nbsp;how&nbsp;it could be affecting you.</strong>',
    next_section: 'who-is-at-risk'
  },
  whatAreTheSigns: {
    symptomsContent: {
      title: 'What are the signs of&nbsp;hep delta?',
      carouselContent: [
        {
          caption: 'Stomach pain',
          image: '/images/what-are-the-signs/what-1-stomach.svg',
          alt:'Stomach pain icon'
        },
        {
          caption: 'Dark pee',
          image: '/images/what-are-the-signs/what-2-pee.svg',
          alt:'Dark pee icon'
        },
        {
          caption: 'Feeling weak or tired',
          image: '/images/what-are-the-signs/what-3-weak.svg',
          alt:'Feeling weak or tired icon'
        },
        {
          caption: 'Not feeling hungry',
          image: '/images/what-are-the-signs/what-4-hungry.svg',
          alt:'Not feeling hungry icon'
        },
        {
          caption: 'Throwing up',
          image: 'images/what-are-the-signs/what-5-throwing.svg',
          alt:'Throwing up icon'
        },
        {
          caption: 'Yellow skin and eyes (jaundice)',
          image: '/images/what-are-the-signs/what-6-jaundice.svg',
          alt:'Yellow skin and eyes (jaundice) icon'
        },
        {
          caption: 'Light-colored poop',
          image: '/images/what-are-the-signs/what-7-poop.svg',
          alt:'Light-colored poop icon'
        }
      ],
      purpleContent: "Hep delta may still be harming your liver, even if you don't feel or see anything.",
      next_section: 'what-are-the-signs-liver'
    },
    liverContent: {
      title: 'Your liver and hep delta',
      subtitle: "Even if you don't feel it, this is what may be happening to your liver.",
      carouselContent: [
        {
          status: '',
          statusClass: '',
          title: 'Healthy liver',
          alt:'Healthy liver is an average size and is able to do its jobs normally',
          bullets: [
            'Liver is average size',
            'It is able to do its jobs normally'
          ],
          image: '/images/what-are-the-signs/what-liver-1.svg'
        },
        {
          status: 'Inflammation',
          statusClass: 'inflamation',
          title: 'Swollen liver',
          alt:'Liver is swollen and larger than normal',
          bullets: [
            'Liver becomes larger than normal',
            'May feel painful'
          ],
          image: '/images/what-are-the-signs/what-liver-2.svg'
        },
        {
          status: 'Fibrosis',
          statusClass: 'fibrosis',
          title: 'Scars begin to form',
          alt:'Scars begin to form on the liver. This is called fibrosis',
          bullets: [
            'Swelling damages the liver',
            'Scars form and can prevent the liver from doing its jobs'
          ],
          image: '/images/what-are-the-signs/what-liver-3.svg'
        },
        {
          status: 'Cirrhosis',
          statusClass: 'cirrhosis',
          title: 'Scarring gets worse',
          alt:'Scarring on liver gets worse and affects the liver. This is called cirrhosis',
          bullets: [
            'Scars replace healthy cells and tissue, blocking the flow of blood to the liver',
            'Damage is often permanent'
          ],
          image: '/images/what-are-the-signs/what-liver-4.svg'
        },
        {
          status: 'Hepatocellular carcinoma',
          statusClass: 'carcinoma',
          alt:'Liver cancer develops as tumors appear. Damage makes it difficult for the liver to work properly',
          title: 'Liver cancer',
          bullets: [
            'Scars become tumors on the liver',
            'Damage makes it difficult for the liver to do its jobs'
          ],
          image: '/images/what-are-the-signs/what-liver-5.svg'
        }
      ],
      next_section: 'how-do-you-test-for-it'
    }
  },
  whoIsAtRisk:{
    title: 'What puts you at risk for hep delta?',
    subtitle: 'Hep delta can’t live in your body alone–it needs hep B.',
    img1Text:'You can have hep B and later&nbsp;get hep delta',
    img2Text: 'You can get hep B and hep delta at the same time',
    cta: {
      text: 'Learn more about hep B.',
      link: 'https://www.hepb.com/',
      att: 'data-analytics-event-label="Learn more about hep B"'
    },
    next_section: 'who-is-at-risk-spread',
    icon1: 'images/who-is-at-risk/who-1.svg',
    icon1Alt: 'What puts you at risk for hep delta',
    icon2: 'images/who-is-at-risk/who-2.svg',
    icon2Alt: 'What puts you at risk for hepatitis delta'
  },
  whoIsAtRiskSpread: {
    carouselContent: [
      {
        caption: 'Sharing needles',
        image: '/images/who-is-at-risk/who-3-needle.svg'
      },
      {
        caption: 'Sharing razors, toothbrushes, or nail clippers',
        image: '/images/who-is-at-risk/who-4-hygiene-tools.svg'
      },
      {
        caption: 'Unclean medical tools or objects',
        image: '/images/who-is-at-risk/who-5-med-tools.svg'
      },
      {
        caption: 'Contact with blood',
        image: '/images/who-is-at-risk/who-6-arm.svg'
      },
      {
        caption: 'Any unprotected sex',
        image: '/images/who-is-at-risk/who-7-any-sex.svg'
      },
      {
        caption: 'Being a man who has sex with a man',
        image: '/images/who-is-at-risk/who-8-msm.svg'
      }
    ],
    title2: 'Hep delta is spread through contact <br class="show-desk">with infected blood, semen, and other body fluids',
    subtitle2: 'Someone with hep B can get hep delta through:',
    next_section: 'who-is-at-risk-from'
  },
  whoIsAtRiskFrom: {
    carouselContent2: [
      {
        caption: 'Touching or kissing',
        image: '/images/who-is-at-risk/who-9-touching.svg',
        alt: 'You can’t get it from coughing, sneezing, touching, kissing, or sharing drinks'
      },
      {
        caption: 'Sharing food or drinks',
        image: '/images/who-is-at-risk/who-9-foods.svg',
        alt: 'You can’t get it from coughing, sneezing, touching, kissing, or sharing drinks'
      },
      {
        caption: 'Coughing or sneezing',
        image: '/images/who-is-at-risk/who-9-coughing.svg',
        alt: 'You can’t get it from coughing, sneezing, touching, kissing, or sharing drinks'
      }
    ],
    title3: 'You can’t get hep delta from:',
    next_section: 'what-are-the-signs'
  },
  support_resources: {
    headline: 'Support resources',
    subheadline: 'Resources to help you learn more about hepatitis',
    next_section: 'survey',
    cards: [
      {
        card_color:'c-tawny-port',
        headline: 'Questions for your doctor',
        paragraph:'Use these questions to help guide your next appointment',
        image: '/images/resources/question.svg',
        imgAlt: 'Questions for your doctor',
        btn_text: 'Download now',
        tracking: 'data-analytics-event-label="Learn more about hep B"',
        btn_link: '/assets/pdf/HepatitisDelta_Doctor_Discussion_Guide.pdf',
        btn_download: true,
        downloadIcon: '/images/support-resources/button-download-30.svg'
      },
      {
        card_color:'c-cardinal',
        headline: 'The ABCDs of hepatitis',
        paragraph:'Learn about the differences between hepatitis A, B, C, and D',
        image: '/images/resources/abcd.svg',
        imgAlt: 'Learn about hepatitis',
        btn_text: 'Download now',
        tracking: 'data-analytics-event-label="Liver Foundation Blog"',
        btn_link: '/assets/pdf/HDV_ABCDs_of_Hepatitis_Handout_Digital.pdf',
        btn_download: true,
        downloadIcon: '/images/support-resources/button-download-30.svg'
      },
      {
        card_color:'c-mai-tai',
        headline: 'Support for hep B',
        paragraph:'Visit HepB.com to get resources and information',
        image: '/images/resources/support.svg',
        imgAlt: 'Researching hep B',
        btn_text: 'Visit site',
        btn_link: 'https://www.hepb.com/',
        btn_download: false,
        anchorClass:'external-link',
        regularIcon: '/images/support-resources/button-circle-arrow-right-30-white.svg'
      },
      {
        card_color:'c-haiti',
        headline: 'Mental health and wellness',
        paragraph:'Visit the American Liver Foundation\'s blog for mental health and wellness tips',
        image: '/images/resources/mental.svg',
        imgAlt: 'Conversations about mental health and liver disease',
        btn_text: 'Visit site',
        btn_link: 'https://liverfoundation.org/health-wellness-blog/',
        btn_download: false,
        anchorClass:'external-link-3rd',
        regularIcon: '/images/support-resources/button-circle-arrow-right-30-white.svg'
      }
    ]
  },
  howDoYouTest: {
    stepOne: {
      src:'/images/how-do-you-test-for-it/how-1-desk.svg',
      srcMob:'/images/how-do-you-test-for-it/how-1-mobi.svg',
      alt:'Antibody test',
      title: 'How do you test for hep delta?',
      descriptionLineOne: 'If you have hep B, 2 simple blood tests will tell you if you have hep delta.',
      descriptionLineTwo: 'The blood is taken from your vein and then tested in a lab.',
      stepOneTitle: 'Your doctor will test your blood for antibodies',
      stepOneDesp: "Having antibodies means you've had hep delta at some point, but you may not have it now.",
      next_section: 'how-do-you-test-step-two'
    },
    stepTwo: {
      src:'/images/how-do-you-test-for-it/how-2-desk.svg',
      srcMob:'/images/how-do-you-test-for-it/how-2-mobi.svg',
      alt:'RNA test',
      stepTwoTitle: 'If you have antibodies, your doctor will test you for RNA',
      stepTwoDesp: 'Having the hep delta RNA in your body means you currently have hep delta.',
      callout: "If you know you have hep B, use these questions <br class='show-desk'>to <b>talk to your doctor about hep delta.</b>",
      calloutSrc: '/images/how-do-you-test-for-it/circle-arrow-down.svg',
      next_section: 'support-resources',
      download: '/assets/pdf/HepatitisDelta_Doctor_Discussion_Guide.pdf'
    }
  },
  survey: {
    headline: 'We want to hear from you',
    subheadline_1: 'Is there any other information you want to learn about hep delta?',
    subheadline_2: 'Answer 2 quick questions to let us know.',
    sections: [{
      class: 'form-survey__section-1',
      formAction: '',
      topText: 'Question 1 of 2',
      title: 'Which of these topics would you like to learn about?',
      instruction: 'Choose all that apply',
      options: [
        [{
          class: 'checklist-icon',
          inputClass:'topic-check',
          text: 'Testing and understanding results',
          name: 'testing-and-understanding-results'
        },
        {
          class: 'liver-icon',
          inputClass:'topic-check',
          text: 'How to deal with the effects of hep delta on your body',
          name: 'how-to-deal-with-the-effects-of-hep-delta-on-your-body'
        },
        {
          class: 'shield-icon',
          inputClass:'topic-check',
          text: 'Preventing the spread of&nbsp;hep&nbsp;delta',
          name: 'preventing-the-spread-of-hep-delt'
        }],
        [
          {
            class: 'cancer-icon',
            inputClass:'topic-check',
            text: 'How hep delta can get worse',
            name: 'how-hep-delta-can-get-worse'
          },
          {
            class: 'brain-icon',
            inputClass:'topic-check',
            text: 'Lifestyle tips about mental health and relationships',
            name: 'lifestyle-tips-about-mental-health-and-relationships'
          }
        ]
      ],
      actionButton: {
        class: 'modal-survey__next disabled',
        text: 'Next Question'
      }
    },
    {
      class: 'form-survey__section-2',
      topText: 'Question 2 of 2',
      title: 'Which tools would you find useful in learning about hep delta?',
      instruction: 'Choose all that apply',
      options:[
        [{
          class: 'pin-icon',
          inputClass:'tool-check',
          text: 'Doctor finder',
          name: 'doctor-finder'
        },
        {
          class: 'play-icon',
          inputClass:'tool-check',
          text: 'Videos about hep delta',
          name: 'videos-about-hep-delta'
        }],
        [
        {
          class: 'list-icon',
          inputClass:'tool-check',
          text: 'List of hep delta definitions',
          name: 'list-of-hep-delta-definitions'
        },
        {
          class: 'search-icon',
          inputClass:'tool-check',
          text: 'Resources available near&nbsp;you',
          name: 'resources-available-near-you'
        }]
      ],
      actionButton: {
        class: 'modal-survey__submit disabled',
        text: 'Submit'
      }
    }]
  },
  interstitial: {
    id:'interstitial',
    title: 'You are leaving this site',
    copy: 'The link you have selected will take you away from <a href="https://www.whatishepdelta.com" target="_blank">whatishepdelta.com</a> to an external, third party website, that is not owned or maintained by Gilead Sciences, Inc. Gilead Sciences, Inc. is not responsible for the content on this external website, its terms and conditions, or privacy policy.',
    continue: 'Continue',
    close: 'Go Back'
  },
  cookieInterstitial: {
    id:'cookieInterstitial',
    copy: 'We use cookies to offer a better browsing experience, analyze site traffic, personalize content, and assist in our marketing efforts. Read more about our <a href="#">use of cookies</a>.',
    continue: 'Accept Cookies',
    close: 'Cookie Settings'
  }
};
