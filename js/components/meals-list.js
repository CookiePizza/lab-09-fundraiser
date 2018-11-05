import html from '../helper-utilities/html.js';

function makeMeal(meals) {
    return html `
        <li class="meals">
           <h3 class="name">${meals.name}</h3>
           <p>${meals.description}</p>
           <p>$${meals.cost}</p>
           <img src="assets/meal-list/${meals.id}.jpg">
        </li>
    `;
}


const list = document.getElementById('meals');

const mealList = {
    init(meals, onSelect) {
        for(let i = 0; i < meals.length; i++) {
            mealList.add(meals[i]);
        }
        mealList.onSelect = onSelect;
        mealList.meals = meals;
    },
    add(meal) {
        const dom = makeMeal(meal);
        const listItem = dom.querySelector('li');
        // console.log('listItem', listItem);

        listItem.addEventListener('click', function() {
            // console.log('click');
            mealList.onSelect(meal);     // INCREASE CART COUNT
        });
        list.appendChild(dom);
    },
    remove(index) {
        list.querySelectorAll('li') [index].remove();
    }
};

export default mealList;



