const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret';

async function requireAuth(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'no_token' });
  const parts = auth.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') return res.status(401).json({ error: 'bad_token_format' });
  try {
    const payload = jwt.verify(parts[1], JWT_SECRET);
    const user = await User.findByPk(payload.id);
    if (!user) return res.status(401).json({ error: 'invalid_token_user' });
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'invalid_token' });
  }
}

module.exports = { requireAuth };
