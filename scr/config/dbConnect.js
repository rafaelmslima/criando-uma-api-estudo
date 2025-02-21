import mongoose from "mongoose";

// Arquivo focado em iniciar a conexão com a Database
async function conectaNaDatabase() {
  // Conectando ao banco MongoDB usando a lib mongoose
  mongoose.connect("mongodb+srv://admin:<admin123>@cluster0.yk64n.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0"); 
  return mongoose.connection;
}

export default conectaNaDatabase;