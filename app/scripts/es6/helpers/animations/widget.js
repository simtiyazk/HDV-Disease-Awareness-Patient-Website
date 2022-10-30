import $ from 'jquery';
import skrollr from 'skrollr';
import appear from 'jquery.appear';
import Vivus from 'vivus';
import countTo from 'jquery-countto';
import { isAnyMobile } from './isMobile';
import {
  $parallaxEl,
  $parallaxPageTitleEl,
  $parallaxPortfolioEl,
  $body
} from './consts';

export function widgetInit() {
  animations();
  parallax();
  counter();
  roundedChart();
}

export function parallax() {
  if (typeof skrollr !== 'undefined' && $.isFunction(skrollr)) {
    return true;
  }

  if (
    $parallaxEl.length > 0 ||
    $parallaxPageTitleEl.length > 0 ||
    $parallaxPortfolioEl.length > 0
  ) {
    if (!isAnyMobile()) {
      skrollr.init({ forceHeight: false });
    } else {
      $parallaxEl.addClass('mobile-parallax');
      $parallaxPageTitleEl.addClass('mobile-parallax');
      $parallaxPortfolioEl.addClass('mobile-parallax');
    }
  }
}

export function animations() {
  if (!$().appear && typeof appear === 'undefined') {
    return true;
  }

  const $dataAnimateEl = $('[data-animate]');
  if ($dataAnimateEl.length > 0) {
    if (
      $body.hasClass('device-xl') ||
      $body.hasClass('device-lg') ||
      $body.hasClass('device-md')
    ) {
      $dataAnimateEl.each(function() {
        const element = $(this);
        const animationOut = element.attr('data-animate-out');
        const animationDelay = element.attr('data-delay');
        const animationDelayOutTime = element.attr('data-delay-out') || 3000;
        const animationDelayTime = animationDelay ? Number(animationDelay) : 0;

        if (!element.hasClass('animated')) {
          element.addClass('not-animated');
          const elementAnimation = element.attr('data-animate');
          element.appear(
            function() {
              if (animationDelayTime > 0) {
                setTimeout(function() {
                  addAnimationToel(element, elementAnimation);
                }, animationDelayTime);
              }else{
                addAnimationToel(element, elementAnimation);
              }

              if (animationOut) {
                setTimeout(function() {
                  element.removeClass(elementAnimation).addClass(animationOut);
                }, animationDelayOutTime);
              }
            },
            { accX: 0, accY: -290 },
            'easeInCubic'
          );
        }
      });
    }
  }
}

function addAnimationToel(element, elementAnimation) {
  element.removeClass('not-animated').addClass(`${elementAnimation} animated`);
}

export function roundedChart() {
  let $roundedChartElems = $('.rounded-chart');

  if ($roundedChartElems.length > 0) {
    $roundedChartElems.each(function() {
      const $element = $(this);
      const svgId = $element.find('svg')[0].id;
      const duration = $element.data('duration');

      if (!$element.hasClass('skills-animated')) {
        let chart = new Vivus(svgId, {
          type: 'sync',
          duration
        });
        $element.appear(
          function() {
            chart.play();
            $element.addClass('chart-animated');
          },
          { accX: 0, accY: -120 },
          'easeInCubic'
        );
      }
    });
  }
}

export function counter() {
  const $counterEl = $('.counter:not(.counter-instant)');
  if ($counterEl.length > 0) {
    $counterEl.each(function() {
      const element = $(this);
      let counterElementComma = $(this)
        .find('span')
        .attr('data-comma');
      if (!counterElementComma) {
        counterElementComma = false;
      } else {
        counterElementComma = true;
      }
      element.appear(
        function() {
          runCounter(element, counterElementComma);
        },
        { accX: 0, accY: -120 },
        'easeInCubic'
      );
    });
  }
}

function runCounter(counterElement, counterElementComma) {
  if (countTo) {
    if (counterElementComma === true) {
      counterElement.find('span').countTo({
        formatter: function(value, options) {
          value = value.toFixed(options.decimals);
          value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          return value;
        }
      });
    } else {
      counterElement.find('span').countTo();
    }
  }
}
