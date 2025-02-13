const OrderList = require("../models/orderList");
const Order = require("../models/order");


const pedido = new OrderList();

pedido.addOrder(new Order(2, "Coxinha", 5.00, "Preparando"));
pedido.addOrder(new Order(1, "Coca Cola", 5.00, "Pendente"));

const router = {
    addOrder: (req, res) => {
        try {
            const { quantidade, item, preco } = req.body;
            if (!quantidade || !item || !preco) {
                throw new Error("Preencha todos os campos para adicionar um pedido");
            }
            const order = new Order(quantidade, item, preco, "Pendente");
            pedido.addOrder(order);
            return res.status(201).json({ message: "Pedido adicionado com sucesso", order });
        } catch (error) {
            res.status(400).json({ message: "Erro ao adicionar pedido", error });
        }
    },
    getAllOrders: (req, res) => {
        try {
            const orders = pedido.getAllOrders();
            return res.status(200).json(orders);
        } catch (error) {
            res.status(400).json({ message: "Erro ao buscar pedidos", error });
        }
    },
    getOrderById: (req, res) => {
        try {
            const {id} = req.params;
            const order = pedido.getOrderById(id);
            return res.status(200).json({status: order.status});
        } catch (error) {
            res.status(400).json({ message: "Erro ao buscar pedido", error });
        }
    },
    deleteOrder: (req, res) => {
        try {
            const { id } = req.params;
            const order = pedido.getOrderById(id);
            if (!order) {
                return res.status(404).json({ message: "Pedido não encontrado" });
            }
            if (order.status !== "Pendente") {
                return res.status(403).json({ message: "Não é possível deletar um pedido que já está em preparo ou está pronto" });
            }
            pedido.deleteOrder(id);
            return res.status(200).json({ message: "Pedido cancelado" });
        } catch (error) {
            return res.status(400).json({ message: "Erro ao cancelar pedido", error });
        }
    }
}

module.exports = router;