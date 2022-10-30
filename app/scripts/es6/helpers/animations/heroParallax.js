import {
  $heroImageContainer,
  $body,
  $header,
  $window,
  $isiExpansionToggle
} from './consts';

export function setParallaxDimensions() {
  if ($heroImageContainer.length < 1) {
    return true;
  }
  let headerH = $header.height();
  if (
    $body.hasClass('device-xl') ||
    $body.hasClass('device-lg') ||
    $body.hasClass('device-md')
  ) {
    headerH = $header.height();
    const isiH = $isiExpansionToggle.height();
    let parallaxElHeight = $window.outerHeight() - isiH - headerH;

    //Set a min height
    parallaxElHeight = parallaxElHeight > 350 ? parallaxElHeight : 350;

    $heroImageContainer.height(parallaxElHeight)
      .find('.caption').css({ 'height': parallaxElHeight });
  } else {
    $heroImageContainer
      .css({ 'margin-top': 0, height: '' })
      .find('.caption')
      .css({ 'height': '', 'margin-top': ''});
  }
}
