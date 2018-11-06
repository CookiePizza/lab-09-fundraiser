// const cartList = document.getElementById('cart-list');
const checkoutForm = document.getElementById('checkout-form');
// const formResponse = document.getElementById('form-response');


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