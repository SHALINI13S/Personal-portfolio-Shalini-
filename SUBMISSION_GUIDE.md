# Thiranex Task 1 — Submission Guide

## Screenshots to take

1. Full homepage (hero section) — desktop view
2. About, Education, Skills sections — desktop view
3. Projects section showing the Hotel Management System card
4. Contact form, both empty and after a successful submission message
5. Mobile view of the homepage (browser resized narrow, or phone)
6. Backend terminal showing `Server running on http://localhost:5000` and `MySQL connected successfully.`
7. `GET /api/projects` response (Postman, browser, or `curl`) showing the project JSON coming from the database
8. MySQL query result: `SELECT * FROM contacts;` showing a stored contact submission
9. Project folder structure (frontend/backend/database) in your code editor
10. Deployed live site URL in the browser address bar (after deployment)

## Explanation you can give your faculty

"I built a full-stack personal portfolio website. The frontend is a React application that displays my education, skills, and my Hotel Management System project. Instead of hard-coding the project details into the webpage, the Projects section calls a REST API built with Node.js and Express, which reads the project data from a MySQL database and sends it back as JSON. The Contact section works the same way in reverse — when a visitor submits the form, the frontend sends that data to the backend API, which validates it and stores it as a new row in a MySQL `contacts` table. This shows the three layers — frontend, backend, and database — actually communicating with each other, rather than being three separate, disconnected pieces."

## 10 viva questions and answers

**1. What is the architecture of your project?**
A three-tier architecture: a React frontend, an Express.js REST API backend, and a MySQL database. The frontend calls the backend over HTTP, and the backend reads from and writes to MySQL.

**2. Why did you fetch projects from an API instead of hard-coding them in React?**
To demonstrate real frontend-backend-database integration. Hard-coding the data in the frontend would mean the "database" layer isn't actually being used — fetching from `/api/projects` proves the data genuinely lives in MySQL.

**3. What does the GET /api/projects endpoint do?**
It queries the `projects` table in MySQL, formats the technologies and features fields into arrays, and returns the result as JSON to the frontend.

**4. What does the POST /api/contact endpoint do?**
It validates the incoming name, email, subject and message fields using `express-validator`, and if valid, inserts them as a new row into the `contacts` table.

**5. How do you prevent invalid contact form submissions?**
Both the browser (`required` fields, `type="email"`) and the backend (`express-validator` rules checking for empty fields and a valid email format) validate the input. The backend is the authoritative check since client-side validation can be bypassed.

**6. How are your database credentials kept secure?**
They're stored in a `.env` file, which is excluded from version control by `.gitignore`, and read at runtime using the `dotenv` package. A `.env.example` file with placeholder values is committed instead.

**7. How does CORS work in your project?**
The backend uses the `cors` middleware and only allows requests from the frontend's URL (set via the `FRONTEND_URL` environment variable), so browsers permit the frontend to call the API even though it runs on a different port/domain.

**8. What database tables did you create, and why?**
`projects` (id, title, description, technologies, features, created_at) to store portfolio project data, and `contacts` (id, name, email, subject, message, created_at) to store messages from visitors.

**9. What would you do differently if you had more time?**
Add authentication so I could edit my own project data through an admin panel instead of only via SQL, and add automated tests for the API endpoints.

**10. What was the most challenging part of this project?**
Connecting the three layers correctly — making sure environment variables, CORS settings, and API URLs matched between the frontend and backend in both local development and deployment.
