import debounce from './debounce.js';
import { SlideNav } from './slide.js';


const slide = new SlideNav('.slide-container', '.slide-wrapper');
slide.init();
slide.addArrow('.prev', '.next');
slide.addControl('.custom-controls');