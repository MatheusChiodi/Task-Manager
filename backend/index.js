const express = require('express');
const cors = require('cors');
const app = express();
const taskRoutes = require('./routes/taskRoutes');
const sequelize = require('./config/database');

// Configuração do CORS
app.use(cors({
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE,OPTIONS",
  allowedHeaders: "Content-Type,Authorization"
}));

app.use(express.json());
app.use('/tasks', taskRoutes);
app.options('*', cors());

// Sincroniza o banco de dados antes de iniciar o servidor
sequelize
  .sync()
  .then(() => {
    console.log('📌 Banco de dados sincronizado!');
    app.listen(3000, () => console.log('🚀 Servidor rodando na porta 3000'));
  })
  .catch((err) => console.error('❌ Erro ao sincronizar banco:', err));
