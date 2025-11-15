const express = require('express');
const router = express.Router();
const passport = require('passport');
const { signup, login, oauthCallback } = require('../controllers/authController');

router.post('/signup', signup);
router.post('/login', login);

// Google OAuth
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { session: false, failureRedirect: '/api/auth/failure' }), oauthCallback);

// Facebook OAuth
router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));
router.get('/facebook/callback', passport.authenticate('facebook', { session: false, failureRedirect: '/api/auth/failure' }), oauthCallback);

router.get('/failure', (req, res) => res.json({ success: false }));

module.exports = router;
