import { autor } from "../models/autores.js";
import mongoose from "mongoose";

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

      if (autorEncontrado !== null) {
        res.status(200).json(autorEncontrado);
      }
      else {
      res.status(404).json({message: "Id do Autor não localizado"});
        
      }
    } catch(erro) {
      if (erro instanceof mongoose.Error.CastError) {
        
        res.status(400).send({message: "Um ou mais dados fornecidos estão incorretos"});

      }
      else {

      res.status(500). send({message: "Erro interno de Servidor"});
      
      }
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