import "dotenv/config";
import app from "./scr/app.js";

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Servidor Escutando!")
});
