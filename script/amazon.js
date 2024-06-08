import {cart, addToCart, saveToStorage} from "../data/cart.js";
import { products } from '../data/products.js';
import { formatCurrency } from "./utils/money.js";

let productsHTML = '';



products.forEach((product) => {
    productsHTML += `
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${formatCurrency(product.priceCents)}
          </div>

          <div class="product-quantity-container">
            <select class="product-quantity-${product.id}">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
    `;
});

document.querySelector('.js-products-grid')
  .innerHTML = productsHTML;

  document.querySelector('.js-cart-quantity')
  .innerHTML = `${updateCartQuantity()}`;

  

export function updateCartQuantity(){
  let cartQuantity = 0;

      cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity
      });

      document.querySelector('.js-cart-quantity')
        .innerHTML = cartQuantity;

      return cartQuantity;
}


document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      

      const selectElement = document.querySelector(`.product-quantity-${productId}`);

      const selectValue = selectElement.value;

      const quantity = Number(selectValue);

      const addedToCartIcon = document.querySelector(`.added-to-cart-${productId}`);
      addedToCartIcon.style.opacity = '1';

      addToCart(productId, quantity);
      updateCartQuantity();   
        
    });
  });