class OrderList {
    constructor() {
        this.orders = [];
    }

    addOrder(order) {
        this.orders.push(order);
    }

    getAllOrders() {
        return this.orders;
    }
    getOrderById(id) {
        return this.orders.find(order => order.id == id);
        if(!order) {
            throw new error ("Pedido não encontrado");
        }
        return order;
    }
    
    deleteOrder(orderId) {
        this.orders = this.orders.filter(order => order.id != orderId);
        }
    }

module.exports = OrderList;