require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const { sequelize } = require('./config/database');
const authRoutes = require('./routes/auth');





const dotenv = require("dotenv");
dotenv.config();


const app = express();
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());

app.use(
  session({
    name: "session",
    keys: [process.env.SESSION_SECRET || "default_session_key"],
    maxAge: 24 * 60 * 60 * 1000,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// DEBUG MIDDLEWARE
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// ---------- GOOGLE AUTH ----------

// STEP 1: start Google login
app.get(
  "/api/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// STEP 2: callback from Google
app.get(
  "/api/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login-failed",
    session: true,
  }),
  (req, res) => {
    // Success → go to HOME page
    res.redirect(`${FRONTEND_URL}/`);
  }
);

// Who am I (for frontend to check session)
app.get("/api/auth/me", (req, res) => {
  if (!req.user) return res.status(401).json({ loggedIn: false });
  res.json({ loggedIn: true, user: req.user });
});

// Basic test route
app.get("/", (req, res) => {
  res.send("Auth backend running");
});

// Global error handler – print cause of HTTP 500
app.use((err, req, res, next) => {
  console.error("🔥 Unhandled error:", err);
  res.status(500).json({ message: "Internal Server Error", error: err.message });
});

app.listen(PORT, () => {
  console.log(`✅ Auth server running on http://localhost:${PORT}`);
});



app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: process.env.FRONTEND_URL || true,
  credentials: true
}));

// Initialize passport
app.use(session({ secret: process.env.SESSION_SECRET || 'sess_secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
require('./controllers/authController').initializePassport(passport);

app.use('/api/auth', authRoutes);
const dataRoutes = require('./routes/data');
app.use('/api/data', dataRoutes);

app.get('/api/ping', (req, res) => res.json({ ok: true, time: new Date() }));


// ========== GOOGLE AUTH ==========

// Step 1 – start login
app.get(
  "/api/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Step 2 – callback from Google
app.get(
  "/api/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login-failed",
    session: true,
  }),
  (req, res) => {
    // On success, go to dashboard
    res.redirect(`${FRONTEND_URL}/dashboard`);
  }
);


// Serve frontend static files if present
const path = require('path');
const frontendBuild = path.join(__dirname, "../frontend/dist");
const fs = require('fs');
if (fs.existsSync(frontendBuild)) {
  app.use(express.static(frontendBuild));
  app.get('*', (req, res) => {
    res.sendFile(path.join(frontendBuild, 'index.html'));
  });
} else {
  // frontend build not found; frontend likely in development mode
}


app.listen(PORT, async () => {
  console.log(`Server listening on http://localhost:${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Database connected.');
  } catch (err) {
    console.error('DB connection error:', err.message);
  }
});
