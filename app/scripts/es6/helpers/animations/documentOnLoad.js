import { $heroImageContainer } from './consts';
import { setParallaxDimensions } from './heroParallax';

export function documentOnLoadInit() {
  if ($heroImageContainer.length > 0) {
    setParallaxDimensions();
  }
}
