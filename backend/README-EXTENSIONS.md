## Frontend integration notes

- For local login/signup, call:
  - POST /api/auth/signup  { name, email, password }
  - POST /api/auth/login   { email, password } -> { token }
  - Store the returned token and send Authorization: Bearer <token> on requests.

- For Google/Facebook OAuth:
  - Configure Google and Facebook apps and set callback URLs to:
    - Google: http://localhost:4000/api/auth/google/callback
    - Facebook: http://localhost:4000/api/auth/facebook/callback
  - The backend will redirect to FRONTEND_URL + '/oauth-success?token=...'
  - On frontend, implement route /oauth-success to read token and store it.

- XAMPP: import `sql/schema.sql` via phpMyAdmin, or run `npm run migrate` to sync via Sequelize.
