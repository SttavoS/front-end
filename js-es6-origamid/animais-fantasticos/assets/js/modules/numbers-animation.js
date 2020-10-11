export default function initNumbersAnimation() {
    const numbers = document.querySelectorAll('[data-number]');

    function numbersAnimation() {
        numbers.forEach((number) => {
            const total = +number.innerText;
            const increment = Math.floor(total / 100);
            let start = 0;
    
            const timer = setInterval(() => {
                start += increment;
                number.innerText = start;
                if (start > total) {
                    number.innerText = total
                    clearInterval(timer);
                }
            }, 25 * Math.random());
        });
    }

    let observer;
    function handleMutation(mutation) {
        if (mutation[0].target.classList.contains('ativo')) {
            observer.disconnect();
            numbersAnimation();
        }
    }

    const observerTarget = document.querySelector('.numbers');
    observer = new MutationObserver(handleMutation);

    observer.observe(observerTarget, { attributes: true });
}