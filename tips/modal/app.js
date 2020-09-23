const button = document.querySelector('button');
const modal = document.querySelector('.modal-wrapper');

button.addEventListener('click', () => {
    modal.style.display = 'block';
});

modal.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0];
    const classNames = ['modal-close', 'modal-wrapper', 'modal-dismiss'];
    const shouldCloseModal = classNames.some((classNames) => {
        return classNames === classNameOfClickedElement
    });

    if (shouldCloseModal) {
        modal.style.display = 'none';
    }
})