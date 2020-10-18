import NumbersAnimation from './numbers-animation.js';

export default function fetchAnimals(url, target) {
    const numberGrid = document.querySelector(target);

    function createAnimal(animal) {
        const div = document.createElement('div');
        div.classList.add('animal-number');
    
        div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`
    
        return div;
    }

    async function createAnimals() {
        try {
            const animalsResponse = await fetch(url);
            const animalsJSON = await animalsResponse.json();            
        
            animalsJSON.forEach(animal => {
                const animalDiv = createAnimal(animal);
                numberGrid.appendChild(animalDiv);
            });
            
            const numbersAnimation = new NumbersAnimation('[data-number]', '.numbers', 'ativo');
            numbersAnimation.init();
        } catch (error) {
            console.log(error);
        }        
    }
    
    return createAnimals();
}

