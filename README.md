# AI Robotics Workshop Project

This project contains a frontend landing page for an AI & Robotics workshop and a backend API that stores registration enquiries.

## Project Structure

- `client/` - React + Vite frontend
- `server/` - Express + TypeScript backend

## Features

- Workshop landing page
- Registration form
- Backend API for enquiry submissions
- MongoDB storage for registrations

## Prerequisites

- Node.js installed
- MongoDB running locally (or update `MONGODB_URI`)

## Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
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

Create a `.env` file inside `server/`:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/ai_robotic_workshop
```
or You can use the mongodb Atlas url also for deployement purpose i currently deploy it so i fill my mongodb Atlas variables 
## Run the project

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

The frontend will run on Vite's default port (usually `5173`), and the backend will run on `3000`.

## API

### Submit registration

```http
POST /api/enquiry
Content-Type: application/json
```

Body:

```json
{
  "name": "ishant",
  "email": "ishantdahiya2007@gmail.com",
  "phone": "8930351966"
}
```

## Notes

- The frontend form posts to `http://localhost:3000/api/enquiry`
- The server uses CORS so the frontend can communicate with the backend during development
