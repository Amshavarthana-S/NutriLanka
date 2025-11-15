# NutriLanka Backend (Node.js + MySQL/XAMPP)

**What this scaffold contains**
- Express server with JWT-based local auth (signup/login)
- OAuth login with Google and Facebook (Passport)
- Sequelize ORM and a `User` model
- Example SQL schema for XAMPP/MySQL
- Scripts to sync models to the database

**Quick start**
1. Install Node (14+) and XAMPP (MySQL).
2. Extract this project and in terminal run:
   ```bash
   npm install
   cp .env.example .env
   # Edit .env to add your DB credentials and OAuth keys
   npm run migrate
   npm run dev
   ```
3. The server will run on `http://localhost:4000` by default.

**Auth endpoints**
- `POST /api/auth/signup` — email, password, name
- `POST /api/auth/login` — email, password -> returns JWT
- `GET /api/auth/google` -> starts Google OAuth
- `GET /api/auth/google/callback` -> OAuth callback (returns redirect with token)
- `GET /api/auth/facebook` -> starts Facebook OAuth
- `GET /api/auth/facebook/callback` -> OAuth callback

**Notes**
- For OAuth you must configure valid redirect URIs on Google/Facebook developer dashboards.
- This scaffold returns JWTs; integrate them into your front end (store in secure cookie or localStorage).
- See `sql/schema.sql` for MySQL table creation if you prefer raw SQL import.
