import { setParallaxDimensions } from './heroParallax';
import { superfishInit } from './header';
export let t;

export function documentOnResizeInit() {
  t = setTimeout(function() {
    setParallaxDimensions();
    superfishInit();
  }, 500);
}

