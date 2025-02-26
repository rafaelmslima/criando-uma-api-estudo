import autor from "../models/autores.js";

class AutorController {
  static async listarAutores (req, res) {
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);
    } catch (erro) {
      res.status(500).json({message: `${erro.message} ´Falha na requisição`});
    }
  };

  static async listarAutorPorId (req, res) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);
      res.status(200).json(autorEncontrado);
    } catch(erro) {
      res.status(500).json({message: `${erro.message} - Não foi possível encontrar esse autor`});
    }
  };

  static async cadastrarAutor (req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({message: "Criado com sucesso", autor: novoAutor})
    } catch(erro) {
      res.status(500).json({message: `${erro.message} - Falha ao cadastrar autor`});
    }
  }

}

export default AutorController