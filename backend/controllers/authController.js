const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../models');
require('dotenv').config();
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret';
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';

async function signup(req, res) {
  const { name, email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'email and password required' });
  try {
    const existing = await User.findOne({ where: { email } });
    if (existing) return res.status(409).json({ error: 'user_exists' });
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, passwordHash: hash, provider: 'local' });
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { id: user.id, email: user.email, name: user.name } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'server_error' });
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'email and password required' });
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(401).json({ error: 'invalid_credentials' });
    if (!user.passwordHash) return res.status(400).json({ error: 'use_oauth' });
    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(401).json({ error: 'invalid_credentials' });
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { id: user.id, email: user.email, name: user.name } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'server_error' });
  }
}

// Passport setup for Google and Facebook
function initializePassport(passport) {
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      const email = profile.emails && profile.emails[0] && profile.emails[0].value;
      let user = await User.findOne({ where: { provider: 'google', providerId: profile.id } });
      if (!user && email) user = await User.findOne({ where: { email } });
      if (user) {
        user.provider = 'google';
        user.providerId = profile.id;
        await user.save();
        return done(null, user);
      }
      const newUser = await User.create({
        name: profile.displayName || email,
        email: email || `google_${profile.id}@no-email.local`,
        provider: 'google',
        providerId: profile.id
      });
      return done(null, newUser);
    } catch (err) {
      return done(err);
    }
  }));

  passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL,
    profileFields: ['id', 'displayName', 'emails']
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      const email = profile.emails && profile.emails[0] && profile.emails[0].value;
      let user = await User.findOne({ where: { provider: 'facebook', providerId: profile.id } });
      if (!user && email) user = await User.findOne({ where: { email } });
      if (user) {
        user.provider = 'facebook';
        user.providerId = profile.id;
        await user.save();
        return done(null, user);
      }
      const newUser = await User.create({
        name: profile.displayName || email,
        email: email || `fb_${profile.id}@no-email.local`,
        provider: 'facebook',
        providerId: profile.id
      });
      return done(null, newUser);
    } catch (err) {
      return done(err);
    }
  }));

  passport.serializeUser((user, done) => { done(null, user.id); });
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findByPk(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });
}

// After successful OAuth via passport, this handler issues JWT and redirects to frontend with token
async function oauthCallback(req, res) {
  try {
    const user = req.user;
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
    // Send token via redirect to frontend as query param (you can change to cookie if preferred)
    const redirectUrl = `${FRONTEND_URL}/oauth-success?token=${token}`;
    return res.redirect(redirectUrl);
  } catch (err) {
    console.error(err);
    return res.redirect(`${FRONTEND_URL}/oauth-failure`);
  }
}

module.exports = { signup, login, initializePassport, oauthCallback };
