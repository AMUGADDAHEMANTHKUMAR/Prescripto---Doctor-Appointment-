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

## ..........
# Doctor Appointment Website 🥼
A doctor appointment website build with mongodb, express, reactjs and nodejs.

# 💡About this project 
Doctor Appointment website quite useful website. In this project it consists of 3 parts. First one is backend, second one is frontend and last one is admin. You can easly sign up and sign in that page. And then you can see home, all doctors , about and contact page. If you go to the all doctor page you can choose specialization of doctor. If you choose one doctor after doing that immediately will going to the doctor personel page, and then you will choose easely appontment date. If maybe you change you desicion, you should profile page and cancel you appointment. I gave some rights the admin panel. A few of them, add a doctor personel information, graduation, specialization and picture and so on. This website I made three weeks it took quite such a long time but it's very developing myself and learn lots of new things.

## ⚡Technologies
* `MONGODB`
* `EXPRESS`
* `REACT JS`
* `NODE JS`
* `TAILWINDCSS`

## 🛠 Dependecies
* `AXIOS`
* `REACT ROUTER`
* `REACT TOASTIFY`

## 🚦 Running the Project

To run the project in your local environment, follow these steps: ⬇️

## 1️⃣ You need: 

- Vite Tool
- NodeJs.
- Database (`MongoDB`) Free Cluster.

## 2️⃣ Create .env file:

Create a .env file to store your credentials:

- `MONGODB_URI=mongodb+srv://<username>:<password>@clusterName.xxxxxxx.mongodb.net/doctor-appointment`

**Stripe:** Get your own secret key from the [Stripe Dashboard](https://dashboard.stripe.com/apikeys). If you used `setup-and-run.bat`, open `backend/.env` afterward and replace `STRIPE_SECRET_KEY=YOUR_STRIPE_SECRET_KEY_HERE` with `STRIPE_SECRET_KEY=sk_test_...` (or your live key in production). If you create `backend/.env` by hand, include that line yourself.

## 3️⃣ Download npm packages and Vite tool:

- For the backend side follow these steps: ⬇️

1. Run `npm install` in the project directory to install the required dependencies.
2. Run `npm run server` to get the project started.
3. Open [http://localhost:4000](http://localhost:4000) (or the address shown in your console) in your web browser to view the app.

- For the frontend side follow these steps: ⬇️

1. Run `cd doctor-appointment-website/frontend/` should go folder field.
2. Run `npm install` in the project directory to install the required dependencies.
3. Run `npm run dev` to get the project started.
4. Open [http://localhost:5173](http://localhost:5173) (or the address shown in your console) in your web browser to view the app.

- For the admin side follow these steps: ⬇️

1. Run `cd doctor-appointment-website/admin/` should go folder field.
2. Run `npm install` in the project directory to install the required dependencies.
3. Run `npm run dev` to get the project started.
4. Open [http://localhost:5174](http://localhost:5174) (or the address shown in your console) in your web browser to view the app.

## 🌍 How it looks

<details>
<summary><h3> 📸 - Demo Images </h3></summary>


<img src='https://github.com/user-attachments/assets/768d1f94-29e3-4466-90c5-418278abb2ce' width="100%"/>

#

<img src='https://github.com/user-attachments/assets/c66e8a38-6c8f-4b07-ab43-4ede3c087a09' width="100%"/>

#

<img src='https://github.com/user-attachments/assets/6bc93c7b-2e47-414a-ac9c-f7abbe8871b4' width="100%"/>

#

<img src='https://github.com/user-attachments/assets/ba5625b0-2a40-4429-b3c8-e6a5f4e23676' width="100%"/>

#

<img src='https://github.com/user-attachments/assets/7d6f1afb-f767-4464-8189-33df6a1cc2b8' width="100%"/>

#

<img src='https://github.com/user-attachments/assets/c7d8da6e-6bc4-485a-a6ce-8ed52ceff819' width="100%"/>


</details>

