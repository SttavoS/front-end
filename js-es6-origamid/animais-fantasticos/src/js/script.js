import SmoothScroll from './modules/smooth-scroll.js';
import initScrollAnimation from './modules/scroll-animation.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tab-navigation.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initSchedule from './modules/schedule.js';
import initFetchAnimals from './modules/fetch-animals.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"');
smoothScroll.init();

const accordion = new Accordion('[data-animation="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="open"]', '[data-modal="dismiss"]', '[data-modal="container"]');
modal.init();

const tooltips = new Tooltip('[data-tooltip]');
tooltips.init();

initDropdownMenu();
initMenuMobile();
initSchedule();
initFetchAnimals();
initFetchBitcoin();

initScrollAnimation();