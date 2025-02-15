const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('task_manager', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => console.log('💾 Conectado ao MySQL!'))
  .catch((err) => console.error('❌ Erro ao conectar:', err));

module.exports = sequelize;
