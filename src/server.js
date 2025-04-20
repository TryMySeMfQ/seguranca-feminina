import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import detect from 'detect-port';
import banco from './data.js';
import delegaciasRoutes from './routes/delegaciasRoutes.js';
import ajudaRoutes from './routes/ajudaRoutes.js';
import dicasRoutes from './routes/dicasRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminho para a pasta public (um nível acima de /src)
const publicPath = path.join(__dirname, "../public");

const app = express();
const DEFAULT_PORT = 3000;

app.use(cors());
app.use(express.static(publicPath));

// Usar as rotas importadas
app.use('/delegacias', delegaciasRoutes);
app.use('/ajuda', ajudaRoutes);
app.use('/dicas', dicasRoutes);

// API
app.get("/api/delegacias", (req, res) => {
  res.json(banco.delegacias);
});

app.get("/api/ajuda", (req, res) => {
  res.json(banco.telefones);
});

app.get("/api/dicas", (req, res) => {
  res.json(banco.dicas);
});

// Iniciar servidor com porta disponível
detect(DEFAULT_PORT).then(port => {
  if (port === DEFAULT_PORT) {
    console.log(`✅ Porta ${DEFAULT_PORT} disponível.`);
  } else {
    console.log(`⚠️ Porta ${DEFAULT_PORT} em uso. Usando a porta ${port}...`);
  }

  app.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${port}`);
  });
});





