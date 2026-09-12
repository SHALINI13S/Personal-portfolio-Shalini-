# Personal Portfolio — Shalini S

A full-stack personal portfolio website built for **Thiranex Task 1**, demonstrating integration of a React frontend, an Express REST API backend, and a MySQL database.

## Live demo

- Frontend: _add your deployed URL here after deployment_
- Backend API: _add your deployed URL here after deployment_

## Features

- Responsive, modern portfolio with Home, About, Education, Skills, Projects and Contact sections
- Project data (Hotel Management System) is fetched live from the MySQL database through a REST API — not hard-coded in the frontend
- Contact form validates input and stores submissions in MySQL through the API
- Clean separation of frontend, backend and database layers
- Environment-variable based configuration; no secrets committed to the repository

## Technologies used

| Layer      | Technology                          |
|------------|--------------------------------------|
| Frontend   | React (Vite), CSS                    |
| Backend    | Node.js, Express.js                  |
| Database   | MySQL                                |
| API style  | REST                                 |

## Folder structure

```
personal-portfolio/
├── frontend/               # React application
│   ├── src/
│   │   ├── components/     # Navbar, Hero, About, Education, Skills, Projects, Contact, Footer
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── backend/                 # Express REST API
│   ├── routes/               # projects.js, contact.js
│   ├── controllers/          # projectsController.js, contactController.js
│   ├── config/db.js          # MySQL connection pool
│   ├── server.js
│   └── package.json
│
├── database/
│   └── database.sql          # Schema + seed data
│
├── .gitignore
├── .env.example
└── README.md
```

## 1. Prerequisites

- Node.js (v18 or later) and npm
- MySQL Server (local install, or a cloud MySQL instance)

## 2. Database setup

1. Start your MySQL server.
2. Run the schema file to create the database, tables, and seed the Hotel Management System project:

   ```bash
   mysql -u your_username -p < database/database.sql
   ```

   This creates the `portfolio_db` database with `projects` and `contacts` tables, and inserts one project row.

## 3. Backend setup

```bash
cd backend
npm install
cp ../.env.example .env
```

Edit `backend/.env` and fill in your real MySQL credentials:

```
PORT=5000
FRONTEND_URL=http://localhost:5173
DB_HOST=localhost
DB_PORT=3306
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=portfolio_db
```

Run the backend:

```bash
npm run dev
```

You should see:

```
Server running on http://localhost:5000
MySQL connected successfully.
```

Verify the API directly:

```bash
curl http://localhost:5000/api/projects
```

## 4. Frontend setup

```bash
cd frontend
npm install
```

Create `frontend/.env` with the API URL:

```
VITE_API_URL=http://localhost:5000/api
```

Run the frontend:

```bash
npm run dev
```

Open the URL Vite prints (typically `http://localhost:5173`).

## 5. API reference

| Method | Endpoint          | Description                              |
|--------|--------------------|-------------------------------------------|
| GET    | `/api/projects`    | Returns all projects stored in MySQL      |
| POST   | `/api/contact`     | Validates and stores a contact submission |

**POST /api/contact** body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Hello",
  "message": "This is a test message."
}
```

## 6. Testing checklist

Before considering the project complete, verify:

- [ ] `npm run dev` starts the frontend without errors
- [ ] `npm run dev` starts the backend and logs "MySQL connected successfully"
- [ ] `GET /api/projects` returns the seeded Hotel Management System project
- [ ] The Projects section on the website displays that data (confirms it came from the database, not hard-coded)
- [ ] Submitting the contact form adds a row to the `contacts` table (check with `SELECT * FROM contacts;`)
- [ ] Submitting an invalid email or empty fields shows a validation error instead of saving
- [ ] No errors appear in the browser console
- [ ] The site looks correct on a mobile-width browser window and on desktop

## 7. Deployment

**Frontend (Vercel or Netlify):**
1. Push this repository to GitHub.
2. Import the `frontend` folder as the project root in Vercel/Netlify.
3. Set the build command to `npm run build` and output directory to `dist`.
4. Add an environment variable `VITE_API_URL` pointing to your deployed backend URL, e.g. `https://your-backend.onrender.com/api`.

**Backend (Render or similar):**
1. Create a new Web Service pointing at the `backend` folder.
2. Set the start command to `npm start`.
3. Add environment variables from `.env.example` (`DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`, `FRONTEND_URL`, `PORT`).
4. Point `FRONTEND_URL` to your deployed frontend URL so CORS allows it.

**Database (cloud MySQL, e.g. Railway, PlanetScale, Aiven, or Render's MySQL):**
1. Create a MySQL instance.
2. Run `database/database.sql` against it (via its console or `mysql` CLI with the provided host/port).
3. Use the provided host, port, user, password and database name in the backend's environment variables.

After both are deployed, update the live demo links at the top of this README, and do a final round of testing against the live URLs.

## Note on this repository's history

This project was built and reviewed inside a sandboxed environment without outbound network access, so `npm install` and a live MySQL connection could not be executed there. Every backend JavaScript file was syntax-checked with `node --check` and passed. Before submission, please run through the local setup steps above yourself so you can genuinely confirm all the testing checklist items — this also means you'll be able to speak to how it runs when asked.
