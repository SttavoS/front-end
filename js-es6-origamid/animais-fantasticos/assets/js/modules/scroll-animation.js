export default function initScrollAnimation() {
    const sectionScroll = document.querySelectorAll('[data-animation="scroll"]');
    const halfWindow = window.innerHeight * 0.6;

    function scrollAnimation() {
        sectionScroll.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - halfWindow) < 0;
    
            if (isSectionVisible) {
                section.classList.add('ativo');
            } else if(section.classList.contains('ativo')) {
                section.classList.remove('ativo');
            }
        });
    }

    if (sectionScroll.length) {
        scrollAnimation();
        window.addEventListener('scroll', scrollAnimation);
    }
}