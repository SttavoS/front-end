import SmoothScroll from './modules/smooth-scroll.js';
import ScrollAnimation from './modules/scroll-animation.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tab-navigation.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import DropdownMenu from './modules/dropdown-menu.js';
import MenuMobile from './modules/menu-mobile.js';
import Schedule from './modules/schedule.js';
import fetchAnimals from './modules/fetch-animals.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';

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

const scroll = new ScrollAnimation('[data-animation="scroll"]');
scroll.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]', ['touchstart', 'click']);
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const schedule = new Schedule('[data-week]', 'open');
schedule.init();

fetchAnimals('../../animals-api.json', '.grid-number');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');