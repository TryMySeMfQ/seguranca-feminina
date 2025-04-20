import express from 'express';  // Importar express corretamente
import { fileURLToPath } from 'url';
import path from 'path';

const router = express.Router();  // Agora o express.Router() vai funcionar

// Criação do __dirname no contexto de módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminho para a pasta public (um nível acima de /src)
const publicPath = path.join(__dirname, "../../public");

// Rota para retornar a página do mapa
router.get('/', (req, res) => {
  res.sendFile("mapa.html", { root: publicPath });
});

export default router;



