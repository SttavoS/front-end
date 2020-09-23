export default function initScrollAnimation() {
    const sectionScroll = document.querySelectorAll('[data-anime="scroll"]');

    if (sectionScroll.length) {
        const halfWindow = window.innerHeight * 0.6;
    
        function scrollAnimation() {
            sectionScroll.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - halfWindow) < 0;
        
                if (isSectionVisible) {
                    section.classList.add('ativo');
                } else {
                    section.classList.remove('ativo');
                }
            });
        }
        
        scrollAnimation();
        
        window.addEventListener('scroll', scrollAnimation);
    }
}