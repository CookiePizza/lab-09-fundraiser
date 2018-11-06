import html from '../helper-utilities/html.js';

function makeOrder(orders) {
    return html `
    <li class="order-list">
        <h3 class="name">${orders.customer.name}</h3>
    </li>
    `;
}

const list = document.getElementById('order-list');

const orderList = {
    init(orders, onSelect) {
        for(let i = 0; i < orders.length; i++) {
            orderList.add(orders[i]);
        }
        orderList.onSelect = onSelect;
        orderList.orders = orders;
    },
    add(order) {
        const dom = makeOrder(order);
        const listItem = dom.querySelector('li');
    
    
        listItem.addEventListener('click', function() {
            orderList.onSelect(order);
        });
        list.appendChild(dom);
    }
};

export default orderList;