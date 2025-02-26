import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const app = express(); //inicializando o express
routes(app);

const conexao = await conectaNaDatabase();
// Metodo que vai verificar e retornar erros
conexao.on("Error", (erro) =>{
  console.error("erro de conexao", erro);
})

// Metodo que vai esperar por algum evento, nesse caso será uma conexao aberta
conexao.once("open", () => {
  console.log("Conexao com o banco feita com sucesso")
})

export default app;

