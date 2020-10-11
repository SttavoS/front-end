export default function initAccordion() {
    const accordionList = document.querySelectorAll('[data-animation="accordion"] dt');

    function activeAccordion() {
        this.classList.toggle('ativo');
        this.nextElementSibling.classList.toggle('ativo');
    }

    if (accordionList.length > 0) {
        accordionList[0].classList.add('ativo');
        accordionList[0].nextElementSibling.classList.add('ativo');

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
    
}