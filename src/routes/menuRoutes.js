const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const menuController = require("../controllers/menuController");

router.get("/menu", menuController.getAllMenu);
router.get("/order", orderController.getAllOrders);
router.get("/order/:id", orderController.getOrderById);
router.post("/order", orderController.addOrder);
router.delete("/order/:id", orderController.deleteOrder);

module.exports = router;