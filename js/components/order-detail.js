const section = document.getElementById('order-detail');

const orderDetail = {
    // init() {
    //     orderDetail.order = 'this is a test';
    // },
    update(order) {
        orderDetail.order = order;
        section.querySelector('h2').textContent = customer.name;
        section.querySelector('p').textContent = 'TESTING AGAIN';
    }
};

export default orderDetail;
