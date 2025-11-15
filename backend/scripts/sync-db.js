// Simple script to sync Sequelize models to DB (development only)
const { sequelize } = require('../config/database');
const { User } = require('../models');

(async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log('Database synced (Sequelize).');
    process.exit(0);
  } catch (err) {
    console.error('Sync error', err);
    process.exit(1);
  }
})();
