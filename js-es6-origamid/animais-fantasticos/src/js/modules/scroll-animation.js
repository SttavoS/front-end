import debounce from './debounce.js';

export default class ScrollAnimation {
    constructor(sectionsScroll) {
        this.sections = document.querySelectorAll(sectionsScroll);
        this.halfWindow = window.innerHeight * 0.6;

        this.checkDistance = debounce(this.checkDistance.bind(this), 50);
    }
    
    getDistance() {
        this.distance = [...this.sections].map((section) => {
            const offset = section.offsetTop;
            return {
                element: section,
                offset: Math.floor(offset - this.halfWindow)
            };
        });
    }

    checkDistance() {
        this.distance.forEach((section) => {
            if (window.pageYOffset > section.offset) {
                section.element.classList.add('ativo');
            } else if(section.element.classList.contains('ativo')) {
                section.element.classList.remove('ativo');
            }
        });
    }

    init() {
        if (this.sections) {
            this.getDistance();
            this.checkDistance();
            window.addEventListener('scroll', this.checkDistance);
        }
        return this;        
    }

    stop() {
        window.removeEventListener('scroll', this.checkDistance);
    }
}