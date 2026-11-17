# Login & Registration App

A simple full-stack authentication application built with React, Node.js, Express, and MongoDB. This project demonstrates user registration, login, password hashing, and REST API integration.

## Features

- User registration
- User login
- Email validation
- Password validation
- Password hashing using bcrypt
- JWT-based authentication
- MongoDB database integration
- REST API architecture

## Technologies Used

### Frontend
- React
- JavaScript
- CSS
- Vite

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- JSON Web Token (JWT)

## Project Structure

```text
login-registration-app/
│
├── backend/
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── App.css
│   └── index.css
│
├── package.json
└── README.md
```

## Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_REPOSITORY_URL
cd login-registration-app
```

### 2. Setup Frontend

```bash
npm install
npm run dev
```

Frontend runs at:

`http://localhost:5173`

### 3. Setup Backend

Open another terminal:

```bash
cd backend
npm install
```

Create a `.env` file inside the backend directory:

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_SECRET_KEY
```

Start the backend:

```bash
npm run dev
```

Backend runs at:

`http://localhost:5000`

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Check backend status |
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Authenticate an existing user |

### Registration Request

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Login Request

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

## Development Goals

This project is also being used as a practical learning project for DevOps and CI/CD.

Planned improvements:

- [ ] Implement GitHub Actions CI pipeline
- [ ] Automate ESLint checks
- [ ] Automate frontend build verification
- [ ] Add backend automated tests
- [ ] Implement CI for Pull Requests
- [ ] Explore Docker containerization
- [ ] Explore continuous deployment

## Learning Objectives

- Understand frontend and backend integration.
- Learn REST API development.
- Understand authentication workflows.
- Practise Git and GitHub collaboration workflows.
- Learn Continuous Integration using GitHub Actions.

## License

This project is created for educational and learning purposes.
