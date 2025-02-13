const { v4: uuid4 } = require("uuid");

class Order {
    constructor( quantity, item, price, status = "Pendente") {
        this.id = uuid4();
        this.quantity = quantity;
        this.item = item;
        this.price = price;
        this.status = status;
        
    }
}


module.exports = Order;