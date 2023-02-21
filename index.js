const express = require("express");
const app = express();
const connectDatabase = require("./src/database/db");

const userRoute = require("./src/routes/user.route");

const port = 3000;

connectDatabase()
app.use(express.json());

app.use("/user", userRoute);

// ROTA
    // Method HTTP - CRUD (CREATE, READ, UPDATE, DELETE)
        // GET - Pega uma info
        // POST - Cria uma info
        // PUT - Altera toda a info
        // Patch - Altera parte da info
        // DELETE - Apaga uma info
    // Name - Um identificador da rota
    // Function (Callback) - Responsavel por executar algum comando

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));