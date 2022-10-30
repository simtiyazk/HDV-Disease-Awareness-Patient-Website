import { initInitialize } from './initialize';
import { headerInit } from './header';
import { widgetInit } from './widget';
import { windowscroll } from './windowScroll';

export function documentOnReadyInit() {
  initInitialize();
  headerInit();
  widgetInit();
  windowscroll();
}
