# 🍬 Sweet Shop Management System

A full-stack **Sweet Shop Management System** built with **React + TypeScript** on the frontend and **Node.js, Express, and MongoDB** on the backend.  
The application supports **user authentication, inventory management, purchases**, and **role-based admin control**.

---

## ✨ Features

### 👤 User Features
- User registration and login (JWT authentication)
- Browse all available sweets
- Search sweets by name
- View detailed sweet information
- Purchase sweets (stock updates in real time)
- Purchase disabled when stock is unavailable

### 🛠️ Admin Features
- Secure admin login
- Add new sweets to inventory
- Update sweet details (price, quantity, image, description)
- Delete sweets
- Manage inventory stock

---

## 🧰 Tech Stack

### Frontend
- React
- TypeScript
- Material UI (MUI)
- React Router
- npm

### Backend
- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- JWT (Authentication)
- bcrypt (Password hashing)

---

## 📁 Project Structure

sweet-shop/
├── frontend/ # React + TypeScript frontend
├── backend/ # Node.js + Express + MongoDB backend
└── README.md

yaml
Copy code

---

## ⚙️ Backend Setup

### Prerequisites
- Node.js (v16+ recommended)
- npm
- MongoDB (local or MongoDB Atlas)

### 📦 Install Dependencies
```bash
cd backend
npm install
🔐 Environment Variables
Create a .env file inside the backend directory:

env
Copy code
PORT=5000
MONGO_URI=mongodb://localhost:27017/sweet-shop
JWT_SECRET=your_jwt_secret
⚠️ .env is ignored via .gitignore and should never be pushed to GitHub.

▶️ Start MongoDB
For local MongoDB:

bash
Copy code
mongod
Ensure MongoDB is running on port 27017.

▶️ Run Backend Server
bash
Copy code
npm run dev
Backend will be available at:

arduino
Copy code
http://localhost:5000
🌐 API Overview (RESTful)
Authentication
POST /api/auth/register

POST /api/auth/login

Sweets
GET /api/sweets

GET /api/sweets/:id

POST /api/sweets (Admin only)

PUT /api/sweets/:id (Admin only)

DELETE /api/sweets/:id (Admin only)

Purchase
POST /api/purchase

Authentication header:

makefile
Copy code
Authorization: Bearer <JWT_TOKEN>
🖥️ Frontend Setup
bash
Copy code
cd frontend
npm install
npm start
Frontend will run at:

arduino
Copy code
http://localhost:3000