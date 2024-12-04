const express = require("express");
const app = express();
const PORT = 8080;

app.get("/api/home", (req, res) => {
    res.json({message: "Hola Mundo"});
});

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});




