import { productsByCategory } from './products.js';

function populateProducts() {
    const productList = document.getElementById('productList');
    const queryParams = new URLSearchParams(window.location.search);
    const queryParamsObject = Object.fromEntries(queryParams.entries());

    const category = queryParamsObject['category'];

    let categoryItems = [];

    if(category) {
        categoryItems = productsByCategory[category];
    } else {
        categoryItems = Object.values(productsByCategory).flat();
    }
    
    categoryItems.forEach((item) => {
        const productItem = document.createElement('a');
        productItem.href = `productDetails.html?product-id=${item.id}`;
        productItem.classList.add('product-item', 'text-decoration-none', 'd-inline-block');

        const productImage = document.createElement('div');
        const productName = document.createElement('div');
        const productPrice = document.createElement('div');

        const imageData = document.createElement('img');
        imageData.src = item.image;

        productImage.className = 'product-img';
        productName.classList.add('product-name', 'text-center');
        productPrice.classList.add('product-price', 'text-center');

        productImage.appendChild(imageData);
        productName.textContent = item.name;
        productPrice.textContent = item.price;

        productItem.appendChild(productImage);
        productItem.appendChild(productName);
        productItem.appendChild(productPrice);

        productList.appendChild(productItem);
    })
}

populateProducts();