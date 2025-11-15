module.exports = (sequelize, DataTypes) => {
  const FoodItem = sequelize.define('FoodItem', {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING(200), allowNull: false },
    calories: { type: DataTypes.FLOAT, allowNull: false, defaultValue: 0 },
    protein: { type: DataTypes.FLOAT, allowNull: true, defaultValue: 0 },
    carbs: { type: DataTypes.FLOAT, allowNull: true, defaultValue: 0 },
    fats: { type: DataTypes.FLOAT, allowNull: true, defaultValue: 0 },
    category: { type: DataTypes.STRING(100), allowNull: true },
    metadata: { type: DataTypes.JSON, allowNull: true }
  }, { tableName: 'food_items' });
  return FoodItem;
};
