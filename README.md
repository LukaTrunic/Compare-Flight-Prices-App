# ✈️ Online Airline Ticket Sales Platform

This is a full-stack web application for browsing, searching, and purchasing airline tickets. The platform allows users to create accounts, search flights by multiple criteria, reserve tickets, and manage reservations.


## ⚙️ Technologies Used

- **Backend**: Node.js, Express
- **Database**: MongoDB (with Mongoose)
- **Frontend**: Angular (or optionally another framework of choice)


## ✨ Core Functionalities

- 🔍 **Flight Search** – Search flights by destination, date, time, duration, and stopovers
- 💳 **Ticket Reservation & Payment** – Reserve and pay for tickets online
- 👤 **User Profiles** – Register, login, and view reservation history
- 📊 **Admin Panel** – Manage flights, users, and reservations
- 🛟 **Customer Support** – Support system for issues and inquiries (optional for extra points)


## 🚀 Getting Started

### 1. Backend Setup
```bash
cd backend
npm install
cp .env.example .env # configure DB connection string and secrets
node app.js
```

### 2. Database
Ensure MongoDB is running locally or remotely and accessible via your `.env` configuration.

### 3. Frontend
Open the Angular frontend (if applicable), install dependencies and run it:
```bash
cd frontend
npm install
ng serve
```


## 🧪 API Features (Node.js)

- `GET /flights` – Browse flight listings
- `POST /search` – Search flights by criteria
- `POST /reservation` – Book and store ticket reservations
- `POST /user/login`, `/user/register` – Authentication


## 📬 Author

Luka Trunić
