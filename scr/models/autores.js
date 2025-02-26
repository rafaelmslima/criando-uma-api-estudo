import mongoose from "mongoose";

const autoresSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  nome: {type: String, required: true}
})

const autor = mongoose.model("autores", autoresSchema);

export { autor, autoresSchema };