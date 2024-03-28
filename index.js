import express from "express";
import routers from "./src/routes/route.js";


// function iniciarServidor() {
//     // Remove a declaração de exec redundante
//     exec("comando para iniciar o servidor", (error, stdout, stderr) => {
//         if (error) {
//             console.error(`Erro ao iniciar servidor: ${error}`);
//             return;
//         }
//         console.log("Servidor iniciado com sucesso!");
//     });
// }

const app = express();

app.use(express.json());

// Iniciando o servidor

app.use(routers);

const PORT = '3002';

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
