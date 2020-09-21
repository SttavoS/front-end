function initTabNav() {
    const tabMenu = document.querySelectorAll('.tabmenu li');
    const tabContent = document.querySelectorAll('.tabcontent section');


    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo');
        }
        
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });
    }    
}

initTabNav();

function initAccordion() {
    const accordionList = document.querySelectorAll('.accordion dt');
    if (accordionList.length > 0) {
        accordionList[0].classList.add('ativo');
        accordionList[0].nextElementSibling.classList.add('ativo');

        function activeAccordion() {
            this.classList.toggle('ativo');
            this.nextElementSibling.classList.toggle('ativo');
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
    
}

initAccordion();

function initSmoothScroll() {
    const internalLinks = document.querySelectorAll('.menu a[href^="#"');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        
        section.scrollIntoView({
            behavior: "smooth",
            block: 'start'
        });

        // Alternavite
        // const topOfSection = section.offsetTop;
        // window.scrollTo({
        //     top: topOfSection,
        //     behavior: "smooth"
        // });
    }

    internalLinks.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}

initSmoothScroll();

function initscrollAnimation() {
    const sectionScroll = document.querySelectorAll('.js-scroll');

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

initscrollAnimation();