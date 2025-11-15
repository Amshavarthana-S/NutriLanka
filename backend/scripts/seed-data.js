const { sequelize, FoodItem } = require('../models');

(async () => {
  try {
    await sequelize.sync({ alter: true });
    const count = await FoodItem.count();
    if (count === 0) {
      await FoodItem.bulkCreate([
        { name: 'Banana', calories: 89, protein:1.1, carbs:22.8, fats:0.3, category:'fruit' },
        { name: 'Boiled Rice (100g)', calories:130, protein:2.4, carbs:28, fats:0.3, category:'grain' },
        { name: 'Chicken Breast (100g)', calories:165, protein:31, carbs:0, fats:3.6, category:'meat' }
      ]);
      console.log('Food seed added');
    } else console.log('Food already seeded');
    process.exit(0);
  } catch (err) { console.error(err); process.exit(1); }
})();
