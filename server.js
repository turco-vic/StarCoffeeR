const express = require("express");
const cors = require("cors");
const rotas = require("./src/routes/menuRoutes");

const app = express();
const serverPort = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use ("/api", rotas);

app.get("/", (req, res) => {
    res.send("o server está rodando");
});

app.listen(serverPort, () =>{
    console.log(`Servidor rodando na porta ${serverPort}`)
});