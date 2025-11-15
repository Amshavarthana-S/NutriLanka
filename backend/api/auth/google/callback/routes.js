// GET /api/auth/google/callback
app.get(
  "/api/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login-failed",
    session: true,
  }),
  (req, res) => {
    // ✅ Send user to HOME page after successful Google login
    res.redirect(`${FRONTEND_URL}/`);
  }
);
