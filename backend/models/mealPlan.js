module.exports = (sequelize, DataTypes) => {
  const MealPlan = sequelize.define('MealPlan', {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
    name: { type: DataTypes.STRING(150), allowNull: false },
    items: { type: DataTypes.JSON, allowNull: false }, // array of {foodItemId, qty}
    date: { type: DataTypes.DATEONLY, allowNull: false, defaultValue: DataTypes.NOW }
  }, { tableName: 'meal_plans' });
  return MealPlan;
};
