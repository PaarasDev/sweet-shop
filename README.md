# 🍬 Sweet Shop Management System

A full-stack **Sweet Shop Management System** that enables users to browse and purchase sweets, while allowing administrators to manage inventory efficiently.  
The application is built with **React + TypeScript** on the frontend and **Node.js, Express, and MongoDB** on the backend, following RESTful design principles.

---

## ℹ️ Project Info

- Role-based access control (USER / ADMIN)
- JWT-based authentication
- Real-time inventory updates on purchase
- Secure admin inventory management
- RESTful backend APIs
- MongoDB as the primary data store

### 🔑 Default Admin Credentials (Development Only)

 - Email: admin@sweetshop.com
 - Password: 123456


## 🖥️ Frontend Setup

### Prerequisites
- Node.js (v16+ recommended)
- npm

### Install & Run

 - cd frontend
 - npm install
 - npm start

### Frontend runs at:

http://localhost:3000

---

## ⚙️ Backend Setup

### Prerequisites ->

 - Node.js (v16+ recommended)
 - npm
 - MongoDB (local or MongoDB Atlas)

### Install Dependencies

 - cd backend
 - npm install
 - Environment Variables

### Create a .env file inside the backend directory:

PORT=5000
MONGO_URI=mongodb://localhost:27017/sweet-shop
JWT_SECRET=your_jwt_secret

### Start MongoDB

 - mongod
 - Run Backend Server
 - npm run dev

### Backend runs at:

http://localhost:5000