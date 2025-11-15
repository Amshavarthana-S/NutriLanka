// GET /api/auth/google
app.get(
  "/api/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
