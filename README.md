# NutriLanka - Complete Package (Frontend + Backend + DB)

This package contains:
- `frontend/` — your uploaded frontend (original NutriLanka project).
- `backend/`  — Node.js + Express backend scaffold with Sequelize (MySQL), JWT auth, Google/Facebook OAuth.

## Quick start (development)

1. Install Node.js (14+) and XAMPP (MySQL). Start Apache + MySQL from XAMPP control panel.
2. Backend:
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env with DB credentials (XAMPP default: user=root, password=)
   npm run migrate   # optional: creates/syncs DB tables
   npm run dev
   ```
3. Frontend:
   - If your frontend uses `npm start` for dev server, open another terminal:
   ```bash
   cd frontend
   npm install
   npm start
   ```
   - Or build production bundle and let backend serve it:
   ```bash
   cd frontend
   npm install
   npm run build
   # This creates frontend/build which backend will serve automatically.
   ```
4. OAuth:
   - Configure Google and Facebook apps and set callback URLs to backend callbacks:
     - Google: http://localhost:4000/api/auth/google/callback
     - Facebook: http://localhost:4000/api/auth/facebook/callback
   - Put credentials into backend/.env

## Notes
- Backend will serve `frontend/build` if present. Otherwise run frontend dev server separately.
- Database schema is in `backend/sql/schema.sql`.
- For production use, secure your JWT secret and session secret, and consider HTTPS.


## Updates added by assistant
- Added backend models: FoodItem, MealPlan
- Added data API routes and controllers
- Added seed script: backend/scripts/seed-data.js
- Added frontend src pages: Login, Signup, api wrapper
- Updated backend/server.js to serve frontend/dist and mount /api/data
