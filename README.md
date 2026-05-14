# 🧠 Prescripto AI - Smart Doctor Appointment Platform

An AI-powered full-stack doctor appointment booking platform built using the MERN stack. The application helps users book appointments efficiently while integrating intelligent healthcare features for improved user interaction and experience.

Prescripto AI combines appointment management, doctor administration, authentication, payment handling, and AI-assisted healthcare support into a single platform.

---

## 🚀 Features

### Core Features

- 👨‍⚕️ Doctor appointment booking system
- 👤 User registration and login
- 🔐 JWT authentication and authorization
- 📅 Appointment scheduling and management
- 💳 Stripe payment integration
- 📊 Admin dashboard
- 📱 Fully responsive design
- 🧾 Doctor profile management

### AI Features

- 🤖 AI-powered healthcare assistance
- 💬 Smart chatbot interaction
- 🩺 Symptom-based guidance system
- 📅 Intelligent doctor recommendations
- 🔍 AI-assisted appointment suggestions
- 📈 Smart patient data handling

---

## 🛠 Technology Stack

### Frontend
- React.js
- Vite
- TailwindCSS
- JavaScript
- HTML5
- CSS3

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas

### Authentication
- JWT Authentication
- Protected Routes

### Payment
- Stripe Payment Gateway

### AI Integration
- Recommendation System
- Chatbot Support
- Intelligent Healthcare Assistance

---

## 📁 Project Structure

```text
doctor-appointment-website-master/

├── backend/        → Express + MongoDB API
├── frontend/       → User interface
├── admin/          → Admin dashboard
└── AI Module/      → AI recommendation & smart features
```

---

# ⚠️ Prerequisites

Before running the project, install:

- Windows Operating System
- Node.js (LTS Version)
- npm
- MongoDB Atlas account
- Internet connection

Download Node.js:

https://nodejs.org

npm comes automatically with Node.js.

---

# 📥 Installation Guide

## Step 1: Verify Installation

Open Command Prompt and run:

```bash
node -v
npm -v
```

Expected:

```bash
v22.x.x
10.x.x
```

If versions appear, setup is successful.

---

## Step 2: Clone Repository

```bash
git clone <repository-url>
cd doctor-appointment-website-master
```

Or download ZIP and extract manually.

---

## Step 3: Install Dependencies

Backend:

```bash
cd backend
npm install
```

Frontend:

```bash
cd ../frontend
npm install
```

Admin:

```bash
cd ../admin
npm install
```

This installs all required packages automatically.

---

# ⚙️ Environment Configuration

Create `.env` files.

Backend `.env`

```env
MONGODB_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_key
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=password
```

Frontend `.env`

```env
VITE_BACKEND_URL=http://localhost:4000
```

Admin `.env`

```env
VITE_BACKEND_URL=http://localhost:4000
```

---

# ▶️ Run Application

Open three terminals.

### Terminal 1: Backend

```bash
cd backend
npm run server
```

Runs at:

```text
http://localhost:4000
```

---

### Terminal 2: Frontend

```bash
cd frontend
npm run dev
```

Runs at:

```text
http://localhost:5173
```

---

### Terminal 3: Admin Dashboard

```bash
cd admin
npm run dev
```

Runs at:

```text
http://localhost:5174
```

---

## ⚡ Quick Start Option

You can also run:

```text
setup-and-run.bat
```

The script automatically:

- Installs dependencies
- Configures environment variables
- Starts backend server
- Starts frontend
- Starts admin dashboard
- Opens browser automatically

---

## 🌐 Application URLs

| Module | URL |
|----------|------|
| Frontend | http://localhost:5173 |
| Admin Dashboard | http://localhost:5174 |
| Backend API | http://localhost:4000 |

---

## ❌ What's Not Possible

Fully automatic execution with zero setup is not possible for MERN applications because:

- Node.js must exist on the user's system
- npm is required
- Dependencies must be installed
- Internet is required for MongoDB Atlas connection

A one-click script can automate setup after Node.js installation, but initial runtime installation is still required.

---

## 🎯 Project Goal

The objective of Prescripto AI is to simplify healthcare appointment management and enhance user experience through AI-assisted healthcare support, smart recommendations, and efficient scheduling systems.
