import { productsByCategory } from "./products.js";

function populateProductDetails() {
    const productImage = document.getElementById('product-img');
    const productName = document.getElementById('product-name');
    const productPrice = document.getElementById('product-price');
    const productDescription = document.getElementById('product-description-data');
    
    const queryParams = new URLSearchParams(window.location.search);
    const queryParamsObject = Object.fromEntries(queryParams.entries());

    const productId = queryParamsObject['product-id'];

    const products = Object.values(productsByCategory).flat();

    const product = products.find((product) => product.id == productId);

    productImage.src = product.image;
    productName.textContent = product.name;
    productPrice.textContent = product.price;
    productDescription.textContent = product.description;
}

populateProductDetails();