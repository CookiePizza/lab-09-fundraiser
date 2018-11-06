// import addOrder from './components/checkout-form.js';
import cartApi from './data-apis/cart-api.js';
import shoppingCart from './components/shopping-cart.js';

const cart = cartApi.get();

shoppingCart.init(cart);


// Copy shipping address text input to billing input
var checkbox = document.querySelector('input[name="addr-checkbox"]');
var shipAddress = document.getElementById('address-1');
var billAddress = document.getElementById('address-2');
checkbox.addEventListener('click', function() {
    if(checkbox.checked) {
        billAddress.value = shipAddress.value;
    }
    else billAddress.value = '';
});

