import { cart } from "../../data/cart.js";

export function renderCheckoutHeader(){
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity
    });
    
    const HTML = `<div class="checkout-header-left-section">
    <a href="index.html">
      <img class="amazon-logo" src="images/amazon-logo.png">
      <img class="amazon-mobile-logo" src="images/amazon-mobile-logo.png">
    </a>
  </div>

  <div class="checkout-header-middle-section">
    Checkout (<a class="return-to-home-link js-total-items"
      href="index.html">${cartQuantity} items</a>)
  </div>

  <div class="checkout-header-right-section">
    <img src="images/icons/checkout-lock-icon.png">
  </div>`;

  document.querySelector('.js-header-content').innerHTML = HTML;
  
}