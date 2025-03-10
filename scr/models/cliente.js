import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  nome: {type: String, required: true},
  cpf: {type: String, required: true},
  email: {type: String, required: true}
})

const cliente = mongoose.model("cliente", clienteSchema);

export default cliente;