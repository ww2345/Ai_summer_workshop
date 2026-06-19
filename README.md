# AI Robotics Workshop Project

This project is a full-stack internship assignment for an AI & Robotics workshop website. It includes a modern frontend landing page, a backend API for registration enquiries, and a MongoDB database to store submitted form data.

## 🎯 Project Goal

Build and deploy a complete web application where users can:
- view workshop details,
- learn about the event,
- submit a registration form, and
- have their enquiry saved in the database.

---

## 🚀 Live Deployment

- **Frontend (Vercel):** `https://ai-summer-workshop-opal.vercel.app/`
- **Backend API (Render):** `https://ai-summer-workshop.onrender.com`
- **Database:** MongoDB Atlas

> The frontend is deployed on Vercel, the backend is deployed on Render, and the form data is stored in MongoDB.

---

## 🛠️ Tech Stack

### Frontend
- React + Vite
- TypeScript
- Tailwind CSS
- Hosted on Vercel

### Backend
- Node.js
- Express.js
- TypeScript
- MongoDB with Mongoose
- Hosted on Render

---

## 📁 Project Structure

- `client/` - frontend React application
- `server/` - backend Express API
- `README.md` - project documentation

---

## ✨ Features

- Workshop landing page
- Event details section
- Learning outcomes section
- FAQ section
- Registration form
- Enquiry submission to backend
- Data storage in MongoDB

---

## ⚙️ Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/ww2345/Ai_summer_workshop
cd ai-robotic-workshop
```

### 2. Install frontend dependencies

```bash
cd client
npm install
```

### 3. Install backend dependencies

```bash
cd ../server
npm install
```

### 4. Configure environment variables

#### Backend (`server/.env`)

```env
PORT=3000
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<db-name>
```

#### Frontend (`client/.env`)

```env
VITE_API_URL=http://localhost:3000
```

> For production, update `https://ai-summer-workshop-opal.vercel.app/` to your deployed backend URL.

---

## ▶️ Run the Project Locally

### Start the backend

```bash
cd server
npm run dev
```

### Start the frontend

```bash
cd client
npm run dev
```

The frontend will run on `http://localhost:5173` (default Vite port), and the backend will run on `http://localhost:3000`.

---

## 🌐 API Endpoints

### Health Check

```http
GET /
```

Response:

```json
{
  "success": true,
  "message": "Server is running"
}
```

### Submit Registration Enquiry

```http
POST /api/enquiry
Content-Type: application/json
```

Body:

```json
{
  "name": "Ishant",
  "email": "ishant@example.com",
  "phone": "9876543210"
}
```

Response:

```json
{
  "success": true,
  "message": "Registration successful",
  "data": {
    "name": "Ishant",
    "email": "ishant@example.com",
    "phone": "9876543210"
  }
}
```

---

## 🗄️ Database Details

- Database used: **MongoDB**
- ORM/driver: **Mongoose**
- Purpose: store workshop registration enquiries

---

## 📦 Deployment Summary

- **Frontend:** Vercel
- **Backend:** Render
- **Database:** MongoDB Atlas
- **API URL:** `https://ai-summer-workshop.onrender.com`



## ✅ Final Notes

- The frontend sends registration data to the backend API.
- The backend validates the data and stores it in MongoDB.
- The deployed backend is active on Render and can be used by the frontend.
- The frontend is live on Vercel.

## 📝 Short Reflection

My approach was to design the project as a simple end-to-end solution where the React frontend handles the user interface, the Express backend manages request validation and business logic, and MongoDB stores all registration data. I also tried to keep the code organized so the flow from form submission to database entry is easy to follow and debug. During the deployment process, I focused on making sure the frontend and backend could work together smoothly in real environments. If I had more time, I would add a proper admin dashboard, improve form validation and error handling, and include email alerts or a confirmation system so users and organisers get faster feedback.
