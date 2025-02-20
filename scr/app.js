import express from "express";

const app = express(); //inicializando o express

app.get("/", (req, res) =>{
  res.status(200).send("Curso de Node.js"); 
});

app.get("/livros", (req, res) =>{
  res.status(200).send("Pagina de Livros")
})

app.get("/autores", (req, res) => {
  res.status(200).send("Pagina de Autores")
})

export default app;