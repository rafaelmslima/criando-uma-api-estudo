import livro from "../models/livro.js";
import {autor} from "../models/autores.js"

class LivroController {

  static async listarLivros (req, res) {
    try {
    const listaLivros = await livro.find({}); // metodo do mongoose que vai se conectar com o banco atlas e vai buscar tudo na colecao livros
    res.status(200).json(listaLivros);
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - Falha na Requisição`})
    }
  };

  static async listarLivroPorId (req, res) {
    try{
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id);
      res.status(200).json(livroEncontrado);
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - Falha em encontrar o livro no id ${id}`});

    }
  }

  static async cadastrarLivro (req, res) {
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = {...novoLivro, autor: { ...autorEncontrado._doc }};
      const livroCriado = await livro.create(livroCompleto)
      res.status(201).json({ message: "Criado com Sucesso", livro: novoLivro}); //201 - mensagem http de cadastro realizado com sucesso
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - Falha ao cadastrar livro`});
    };
  };

  static async atualizarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({message: "Livro atualizado"});
  } catch (erro) {
      res.status(500).json({message: "Não foi possivel atualizar o livro nesse ID"})
  }
  }

  static async deletarLivro(req, res) {
    try {
    const id = req.params.id;
    await livro.findByIdAndDelete(id);
    res.status(200).json({message: "O livro foi apagado com sucesso"})
    } catch (erro){
      res.status(500).json({message: "Não foi possivel apagar o livro"})
    }
  }

};

export default LivroController;