const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middleware/authMiddleware');
const ctrl = require('../controllers/dataController');

router.get('/food', ctrl.listFood);
router.get('/food/:id', ctrl.getFood);
router.post('/food', requireAuth, ctrl.createFood);

router.get('/mealplans', requireAuth, ctrl.listMealPlans);
router.post('/mealplans', requireAuth, ctrl.createMealPlan);

router.post('/calc/bmi', ctrl.calcBmi);

module.exports = router;
