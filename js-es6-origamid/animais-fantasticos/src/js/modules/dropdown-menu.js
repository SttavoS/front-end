import outsideClick from './outside-click.js';

export default class DropdownMenu {
    constructor(dropdownMenu, events = ['touchstart', 'click']) {
        this.dropdownMenus = document.querySelectorAll(dropdownMenu);
        this.events = events;

        this.activeClass = 'active';
        this.activeDropdownManu = this.activeDropdownManu.bind(this);
    }

    activeDropdownManu(event) {
        event.preventDefault();
        const element = event.currentTarget;

        element.classList.add(this.activeClass);
        outsideClick(element, this.events, () => {
            element.classList.remove(this.activeClass);
        }); 
    }

    addDropdownMenuEvent() {
        this.dropdownMenus.forEach((menu) => {
            this.events.forEach((userEvent) => {
                menu.addEventListener(userEvent, this.activeDropdownManu);
            });
        });
    }

    init() {
        if (this.dropdownMenus) {
            this.addDropdownMenuEvent();
        }
        return this;
    }
    
}