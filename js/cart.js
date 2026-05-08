import { cartItems } from "./cartStore.js";

function populateCart() {
    const cart = document.getElementById('cart');
    const cartProducts = document.getElementById('cart-products');
    const productImage = document.getElementById('product-img');
    const productTitle = document.getElementById('product-title');
    const productDesciption = document.getElementById('product-description');
    const productPrice = document.getElementById('product-price');

    cartItems.forEach((item) => {
        const cartProduct = document.createElement('div');
        const productImage = document.createElement('img');
        const productDetails = document.createElement('div');
        const productTitle = document.createElement('p');
        const productDescription = document.createElement('p');
        const productPrice = document.createElement('p');

        productImage.src = item.image;

        productTitle.textContent = item.name;
        productDescription.textContent = item.description;
        productPrice.textContent = item.price;

        cartProduct.className = 'cart-products';
        productTitle.className = 'product-title';
        productDescription.className = 'product-description';
        productPrice.className = 'product-price';
        productImage.className = 'product-img';

        productDetails.appendChild(productTitle);
        productDetails.appendChild(productDescription);
        productDetails.appendChild(productPrice);

        cartProduct.appendChild(productImage);
        cartProduct.appendChild(productDetails);

        cart.appendChild(cartProduct);
    });
}

populateCart();