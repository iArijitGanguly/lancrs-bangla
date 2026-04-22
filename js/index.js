import { productsByCategory } from './products.js';

function populateCategories() {
    const categoryList = document.getElementById('categoryList');
    const categories = Object.keys(productsByCategory);
    
    categories.forEach((category) => {
        const categoryItem = document.createElement('a');

        categoryItem.className = 'category-item';

        categoryItem.textContent = category;

        categoryList.appendChild(categoryItem);
    });
}

populateCategories();