export default function initTooltip() {
    const tooltips = document.querySelectorAll('[data-tooltip]');

    tooltips.forEach((tooltip) => {
        tooltip.addEventListener('mouseover', onMouseOver);
    });

    function onMouseOver(event) {
        const tooltipBox = createTooltipBox(this);
        tooltipBox.style.top = event.pageY + 'px';
        tooltipBox.style.left = event.pageX + 'px';

        onMouseMove.tooltipBox = tooltipBox;
        this.addEventListener('mousemove', onMouseMove);
        onMouseLeave.tooltipBox = tooltipBox;
        onMouseLeave.element = this;
        this.addEventListener('mouseleave', onMouseLeave);
    }

    const onMouseLeave = {
        handleEvent() {
            this.tooltipBox.remove();
            this.element.removeEventListener('mouseleave', onMouseLeave);
            this.element.removeEventListener('mousemove', onMouseMove);
        }
    }

    const onMouseMove = {
        handleEvent(event) {
            this.tooltipBox.style.top = event.pageY + +20 + 'px';
            this.tooltipBox.style.left = event.pageX + 20 + 'px';
        }
    }

    function createTooltipBox(element) {
        const tooltipBox = document.createElement('div');
        const tooltipText = element.getAttribute('aria-label');

        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = tooltipText;
        document.body.appendChild(tooltipBox);

        return tooltipBox;
    }
}