const { FoodItem, MealPlan } = require('../models');
const { Op } = require('sequelize');

async function listFood(req, res) {
  try {
    const q = req.query.q || '';
    const where = q ? { name: { [Op.like]: `%${q}%` } } : {};
    const items = await FoodItem.findAll({ where, limit: 100 });
    res.json({ ok: true, items });
  } catch (err) { console.error(err); res.status(500).json({ ok: false, error: 'server_error' }); }
}

async function getFood(req, res) {
  try {
    const id = req.params.id;
    const item = await FoodItem.findByPk(id);
    if (!item) return res.status(404).json({ ok: false, error: 'not_found' });
    res.json({ ok: true, item });
  } catch (err) { console.error(err); res.status(500).json({ ok: false, error: 'server_error' }); }
}

async function createFood(req, res) {
  try {
    const data = req.body;
    const item = await FoodItem.create(data);
    res.json({ ok: true, item });
  } catch (err) { console.error(err); res.status(500).json({ ok: false, error: 'server_error' }); }
}

async function listMealPlans(req, res) {
  try {
    const userId = req.user ? req.user.id : null;
    const where = userId ? { userId } : {};
    const plans = await MealPlan.findAll({ where, order: [['date','DESC']] });
    res.json({ ok: true, plans });
  } catch (err) { console.error(err); res.status(500).json({ ok: false, error: 'server_error' }); }
}

async function createMealPlan(req, res) {
  try {
    if (!req.user) return res.status(401).json({ ok: false, error: 'login_required' });
    const userId = req.user.id;
    const { name, items, date } = req.body;
    const plan = await MealPlan.create({ userId, name, items, date });
    res.json({ ok: true, plan });
  } catch (err) { console.error(err); res.status(500).json({ ok: false, error: 'server_error' }); }
}

async function calcBmi(req, res) {
  try {
    const { height_cm, weight_kg } = req.body;
    if (!height_cm || !weight_kg) return res.status(400).json({ ok:false, error:'missing' });
    const h = Number(height_cm) / 100;
    const bmi = Number(weight_kg) / (h*h);
    res.json({ ok: true, bmi: Number(bmi.toFixed(2)) });
  } catch (err) { console.error(err); res.status(500).json({ ok:false, error: 'server_error' }); }
}

module.exports = { listFood, getFood, createFood, listMealPlans, createMealPlan, calcBmi };
