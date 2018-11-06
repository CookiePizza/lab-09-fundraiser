import cartApi from '../data-apis/cart-api.js';


function makeItem(item) {
    const html = /*html*/`
    <li>${item.name} x (${item.quantity}) <strong>$${item.quantity * item.cost}</strong>
        <button class="add-remove" id="add" type="submit">+</button>
        <button class="add-remove" id="remove" type="remove">-</button></li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}


const list = document.getElementById('cart-list');

const shoppingCart = {
    init(cart) {

        let total = 0;

        for(let i = 0; i < cart.length; i++) {
            const item = cart[i];

            total += item.quantity * item.cost;

            const dom = makeItem(cart[i]);
            dom.getElementById('add').addEventListener('click', function() {
                cartApi.add(cart[i]);
                shoppingCart.update(cart);
            });
            dom.getElementById('remove').addEventListener('click', function() {
                cartApi.remove(cart[i]);
                shoppingCart.update(cart);
            });
            list.appendChild(dom);
        }
        const orderTotal = document.createElement('li');
        orderTotal.textContent = `Order Total $${total.toFixed(2)}`;
        list.appendChild(orderTotal);
    },
    update(cart) {
        while(list.lastElementChild) {
            list.lastElementChild.remove();
        }
        shoppingCart.init(cart);
    }
};

export default shoppingCart;