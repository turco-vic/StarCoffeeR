const menuList = require("../models/menuList");
const menu = require("../models/menu");

const cardapio = new menuList();

cardapio.addMenu(new menu(1 , "Café Expresso", 5.00 , 12));
cardapio.addMenu(new menu(2 , "Coxinha", 5.00 , 12));
cardapio.addMenu(new menu(3 , "Pão de Queijo", 5.00 , 12));

const router = {
    getAllMenu: (req, res) => {
        try {
            const menu = cardapio.getAllMenu();
            return res.status(200).json(menu);
        } catch (error) {
            res.status(400).json({ message: "Erro ao buscar cardápio", error});
        }
    },
};

module.exports = router;