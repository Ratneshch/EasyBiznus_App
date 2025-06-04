# EasyBiznus App

EasyBiznus is a full-stack business management application designed to help users manage and grow their businesses efficiently. The project features a modern React frontend and a Node.js/Express backend with MongoDB for data storage.

## Features

- User authentication (signup, login, JWT-based sessions)
- Role-based access (buyer, seller, admin)
- Responsive dashboard for business stats
- Mobile-friendly and desktop layouts
- Secure password hashing and token validation

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, React Router, Axios, Lucide Icons
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs
- **Dev Tools:** dotenv, nodemon

## Folder Structure

```
EasyBiznus_App/
│
├── backend/
│   ├── controllers/          # Logic for handling requests (signup, login, business logic)
│   ├── middleware/           # Auth middleware, error handlers, logging middleware
│   ├── models/               # Mongoose models or database schemas
│   ├── routes/               # Express routes definition files
│   ├── utils/                # Utility functions, e.g. DB connection, token generation
│   ├── .env                  # Environment variables (not committed to git)
│   ├── package.json          # Backend dependencies and scripts
│   └── server.js             # Entry point of backend server (Express app)
│
├── frontend/
│   ├── public/               # Static assets (favicon, index.html, robots.txt)
│   ├── src/
│   │   ├── assets/           # Images, fonts, icons, and other static files used by components
│   │   ├── components/       # Reusable React components (buttons, forms, headers, etc.)
│   │   ├── context/          # React Context providers for state management
│   │   ├── pages/            # Full page components (Dashboard, Login, Signup, etc.)
│   │   ├── App.jsx           # Root React component wrapping all routes/pages
│   │   ├── main.jsx          # ReactDOM render, root of the app initialization
│   │   └── index.css         # Global CSS styles (Tailwind config or global overrides)
│   ├── package.json          # Frontend dependencies and scripts
│   └── vite.config.js        # Vite configuration for frontend bundling
│
├── LICENSE                   # License file for the project
├── .gitignore                # Files and folders to exclude from git (node_modules, .env, etc.)
└── README.md                 # Project overview, instructions, setup, and documentation

```

## Getting Started

### Prerequisites

- Node.js 
- npm or 
- MongoDB database (local or Atlas)

### Backend Setup

1. Go to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install express  mongoose jsonwebtoken bcryptjs dotenv cors nodemon 
   ```
3. Create a `.env` file (see `.env` example in the repo) and set:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Start the backend server:
   ```sh
  nodemon server.js
   ```

### Frontend Setup

1. Go to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install axios react-router-dom lucide-react
   ```
3. Start the frontend dev server:
   ```sh
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage

- Visit `/` for the welcome page.
- Sign up or log in to access the dashboard.
- The dashboard displays business stats and is protected by authentication.

## License

This project is licensed under the MIT License. See the [LICENSE](../LICENSE) file for details.

---

Made with ❤️ by Ratneshch
