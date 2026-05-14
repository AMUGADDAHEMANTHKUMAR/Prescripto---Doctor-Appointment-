# Prescripto — Doctor Appointment Booking Platform

A full-stack doctor appointment booking web application built with the MERN stack. Users can browse doctors by specialization, book appointments, and manage their schedules. Admins can manage doctors and monitor appointments through a dedicated dashboard.

---

## Features

**User Side**
- Register and log in with JWT-based authentication
- Browse all doctors or filter by specialization
- View doctor profiles and available slots
- Book, view, and cancel appointments
- Pay for appointments via Stripe

**Admin Side**
- Add and manage doctor profiles (name, specialization, experience, photo)
- View and manage all appointments
- Monitor platform activity via admin dashboard

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, Vite, TailwindCSS |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas |
| Auth | JWT (JSON Web Tokens) |
| Payments | Stripe |

---

## Project Structure

```
doctor-appointment-website-master/
├── backend/      → Express.js REST API + MongoDB
├── frontend/     → User-facing React app
└── admin/        → Admin dashboard (React)
```

---

## Prerequisites

- [Node.js LTS](https://nodejs.org) (v18 or v20 recommended)
- npm (comes with Node.js)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) free cluster
- [Stripe](https://dashboard.stripe.com/apikeys) account for payment keys

---

## Setup

### 1. Clone the repository

```bash
git clone <repository-url>
cd doctor-appointment-website-master
```

### 2. Install dependencies

```bash
cd backend && npm install
cd ../frontend && npm install
cd ../admin && npm install
```

### 3. Configure environment variables

**backend/.env**
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=yourpassword
```

> `ADMIN_EMAIL` and `ADMIN_PASSWORD` are the credentials used to log into the admin dashboard.

**frontend/.env**
```env
VITE_BACKEND_URL=http://localhost:4000
```

**admin/.env**
```env
VITE_BACKEND_URL=http://localhost:4000
```

---

## Running the App

Open three separate terminals.

**Terminal 1 — Backend**
```bash
cd backend
npm run server
```
Runs at `http://localhost:4000`

**Terminal 2 — Frontend**
```bash
cd frontend
npm run dev
```
Runs at `http://localhost:5173`

**Terminal 3 — Admin**
```bash
cd admin
npm run dev
```
Runs at `http://localhost:5174`

---

## Quick Start (Windows)

Run `setup-and-run.bat` to automatically install dependencies and start all three servers. Node.js must already be installed before running the script.

---

## Application URLs

| Module | URL |
|---|---|
| User App | http://localhost:5173 |
| Admin Dashboard | http://localhost:5174 |
| Backend API | http://localhost:4000 |

---

## Notes

- MongoDB Atlas requires an active internet connection.
- Use Stripe test keys (`sk_test_...`) during development. Never commit real keys to version control.
- Add a `.gitignore` entry for all `.env` files before pushing to GitHub.
