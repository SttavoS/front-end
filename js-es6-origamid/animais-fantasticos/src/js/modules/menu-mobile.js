import outsideClick from './outside-click.js';

export default class MenuMobile {
    constructor(menuBtn, menuList) {
        this.menuBtn = document.querySelector(menuBtn);
        this.menuList = document.querySelector(menuList);

        this.activeClass = 'active';
        this.events = ['click', 'touchstart'];

        this.openMenu = this.openMenu.bind(this);
    } 

    openMenu() {
        this.menuList.classList.add(this.activeClass);
        this.menuBtn.classList.add(this.activeClass);

        outsideClick(this.menuList, ['click', 'touchstart'], () => {
            this.menuList.classList.remove(this.activeClass);
            this.menuBtn.classList.remove(this.activeClass);
        });
    }

    addMenuMobileEvent() {
        this.events.forEach(event => this.menuBtn.addEventListener(event, this.openMenu));
    }

    init() {
        if (this.menuBtn) {
            this.addMenuMobileEvent();   
        }

        return this;
    }

    
}