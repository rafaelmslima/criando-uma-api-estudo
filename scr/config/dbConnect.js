import mongoose from "mongoose";

// Arquivo focado em iniciar a conexão com a Database
async function conectaNaDatabase() {
  // Conectando ao banco MongoDB usando a lib mongoose
  mongoose.connect(process.env.DB_CONNECTION_STRING); 
  return mongoose.connection;
}

export default conectaNaDatabase;