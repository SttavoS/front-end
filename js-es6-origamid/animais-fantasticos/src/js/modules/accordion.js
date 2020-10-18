export default class Accordion {
    constructor(accordionList) {
        this.accordionList = document.querySelectorAll(accordionList);
        this.activeClass = 'active';
    }

    toggleAccordion(item) {
        item.classList.toggle(this.activeClass);
        item.nextElementSibling.classList.toggle(this.activeClass);
    }

    addAccordionEvent() {
        this.accordionList.forEach((item) => {
            item.addEventListener('click', () => this.toggleAccordion(item));
        });
    }

    init() {
        if (this.accordionList.length) {
            this.toggleAccordion(this.accordionList[0]);
            this.addAccordionEvent();
        }
        return this;
    }    
}