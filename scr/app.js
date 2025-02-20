import express from "express";

const app = express(); //inicializando o express
app.use(express.json()) //Permite que você trabalhe com os dados enviados pelo cliente (como em requisições POST, PUT, etc.) de forma simples e direta. (Middleware)

const livros = [
  {
    id: 1,
    titulo: "O Senhor do Aneis"
  },

  {
    id: 2,
    titulo: "Harry Potter"
  }
]

function buscaLivros(id) {
  return livros.findIndex(livro => {
    return livro.id === Number(id);
  })
}

app.get("/", (req, res) =>{
  res.status(200).send("Curso de Node.js"); 
});

app.get("/livros", (req, res) =>{
  res.status(200).json(livros)
})

app.get("/livros/:id", (req,res) => {
  const index = buscaLivros(req.params.id); // Params = Objeto de requisição do Express que contém os parâmetros de rota extraídos do URL. Esses parametros são definidos nas rotas através da sintaxe de dois pontos (:) e servem para capturar partes variáveis da URL. 
  res.status(200).json(livros[index])
}) // os : antes do parametro dizem que o proximo dado será sempre variável

app.post("/livros", (req,res) => {
  livros.push(req.body);
  res.status(201).send("Livro Cadastrado com Sucesso"); //201 - mensagem http de cadastro realizado com sucesso
})

app.put("/livros/:id", (req, res) => {
  const index = buscaLivros(req.params.id)
  livros[index].titulo = req.body.titulo;
  res.status(200).json(livros[index]);
})

app.delete("/livros/:id", (req, res)=> {
  const index = buscaLivros(req.params.id);
  livros.splice(index, 1);
  res.status(200).json(livros);
})

app.get("/autores", (req, res) => {
  res.status(200).send(livros)
})

export default app;