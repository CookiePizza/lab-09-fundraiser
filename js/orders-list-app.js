import ordersApi from './data-apis/orders-api.js';
import orderList from './components/order-list.js';
import orderDetail from './components/order-detail.js';

const orders = ordersApi.getAll();

orderList.init(orders, function(order) {
    orderDetail.update(order);
    console.log(order);
});

addOrder.init(function(order){
    ordersApi.add(order);
});

