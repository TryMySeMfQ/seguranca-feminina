import express from 'express';  // Importar express
import { fileURLToPath } from 'url';
import path from 'path';

const router = express.Router();

// Criação do __dirname no contexto de módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminho para a pasta public (um nível acima de /src)
const publicPath = path.join(__dirname, "../../public");
router.get('/', (req, res, next) => {
  res.sendFile("dicas.html", { root: publicPath }, (err) => {
    if (err) {
      console.error("Erro ao carregar dicas.html:", err);
      res.status(500).send('Erro ao carregar a página.');
    }
  });
});


export default router;



