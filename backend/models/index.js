const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const User = require('./user')(sequelize, DataTypes);
const FoodItem = require('./foodItem')(sequelize, DataTypes);
const MealPlan = require('./mealPlan')(sequelize, DataTypes);

// Associations
User.hasMany(MealPlan, { foreignKey: 'userId' });
MealPlan.belongsTo(User, { foreignKey: 'userId' });

module.exports = { sequelize, User, FoodItem, MealPlan };
