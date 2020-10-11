export default function initModal() {
    const btnOpen = document.querySelector('[data-modal="open"]');
    const btnClose = document.querySelector('[data-modal="dismiss"]');
    const containerModal = document.querySelector('[data-modal="container"]');

    function toogleModal(event) {
        event.preventDefault();
        containerModal.classList.toggle('active');
    }

    function closeWhenClickOutside(event) {
        if (event.target === this) {
            toogleModal(event);
        }
    }

    if (btnOpen && btnClose && containerModal) {
        btnOpen.addEventListener('click', toogleModal);
        btnClose.addEventListener('click', toogleModal);
        containerModal.addEventListener('click', closeWhenClickOutside);
    }   
}

