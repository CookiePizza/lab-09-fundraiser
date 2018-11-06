// const cartList = document.getElementById('cart-list');
const checkoutForm = document.getElementById('checkout-form');
// const formResponse = document.getElementById('form-response');
var checkbox = document.getElementById('checkbox');
var shipAddress = document.getElementById('address-1');
var billAddress = document.getElementById('address-2');

function copyAddress() {
    if(checkbox.checked === true) {
        shipAddress.value === billAddress.value;
    }
}

const addOrder = {
    init(onAdd) {
        checkoutForm.addEventListener('submit', function(event) {
            event.preventDefault();
        
            const elements = checkoutForm.elements;

            const orderData = {
                name: elements.name.value,
                address: elements.address.value,
                billing: elements.billing.value,
            };
        
            onAdd(orderData);
            checkoutForm.reset();
        });
    }
};

export default addOrder;