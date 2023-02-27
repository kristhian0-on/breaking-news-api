import express from 'express';
import connectDatabase from './src/database/db.js';
import dotenv from 'dotenv';

import userRoute from './src/routes/user.route.js';
import authRoute from './src/routes/auth.route.js';
import newsRoute from './src/routes/news.route.js';
import swaggerRoute from './src/routes/swagger.route.js';
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

connectDatabase()
app.use(express.json());
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/news", newsRoute);
app.use("/doc", swaggerRoute);

// ROTA
    // Method HTTP - CRUD (CREATE, READ, UPDATE, DELETE)
        // GET - Pega uma info
        // POST - Cria uma info
        // PUT - Altera toda a info
        // Patch - Altera parte da info
        // DELETE - Apaga uma info
    // Name - Um identificador da rota
    // Function (Callback) - Responsavel por executar algum comando

app.listen(port, () => console.log(`Server running on port: ${port}`));