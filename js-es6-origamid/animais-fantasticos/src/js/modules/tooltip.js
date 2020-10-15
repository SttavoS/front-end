export default class initTooltip {
    constructor(tooltips) {
        this.tooltips = document.querySelectorAll(tooltips);

        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
    }

    createTooltipBox(element) {
        const tooltipBox = document.createElement('div');
        const tooltipText = element.getAttribute('aria-label');

        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = tooltipText;
        document.body.appendChild(tooltipBox);

        this.tooltipBox = tooltipBox;
    }

    onMouseMove(event) {
        this.tooltipBox.style.top = `${event.pageY + 20}px`;

        if (event.pageX + 240 > window.innerWidth) {
            this.tooltipBox.style.left = `${event.pageX - 190}px`;
        } else {
            this.tooltipBox.style.left = `${event.pageX + 20}px`;
        }
    }

    onMouseLeave({currentTarget}) {
        this.tooltipBox.remove();
        currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
        currentTarget.removeEventListener('mousemove', this.onMouseMove);
    }

    onMouseOver({currentTarget}) {
        this.createTooltipBox(currentTarget);

        currentTarget.addEventListener('mousemove', this.onMouseMove);
        currentTarget.addEventListener('mouseleave', this.onMouseLeave);
    }

    addTooltipEvent() {
        this.tooltips.forEach((tooltip) => {
            tooltip.addEventListener('mouseover', this.onMouseOver);
        });
    }

    init() {
        if (this.tooltips.length) {
            this.addTooltipEvent();
        }
        return this;
    }
}