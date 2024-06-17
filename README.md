# Blog Platform

This repository contains the backend and frontend for a blog platform. The backend is built with NestJS and MySQL, while the frontend is built with React and TypeScript.

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

## Installation

### Prerequisites

Make sure you have the following software installed:

- Node.js (>=14.x)
- npm or yarn
- MySQL

### Clone the Repository

```bash
git clone https://github.com/your-username/my-blog-platform.git
cd my-blog-platform
```

### Backend Setup

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

### Frontend Setup

Navigate to the frontend directory and install dependencies:

```bash
cd ../frontend
npm install
```

## Running the Application

### Backend

Before running the backend, make sure your MySQL server is running and the database is set up.

```bash
cd backend
npm run start
```

### Frontend

```bash
cd frontend
npm start
```

### Simultaneously Running Backend and Frontend

You can use concurrently to run both the backend and frontend together. First, install concurrently globally if you haven't already:

```bash
npm install -g concurrently
```

Then, run the following command from the root directory:

```bash
concurrently "npm run start --prefix backend" "npm start --prefix frontend"
```

## Environment Variables

Create a .env file in the backend directory and add the following environment variables:

```bash
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
```

Create a .env file in the frontend directory and add the following environment variable:

```bash
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
```

## Project Structure

```plaintext
my-blog-platform/
├── backend/
│   ├── src/
│   │   ├── auth/
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.module.ts
│   │   │   ├── auth.service.ts
│   │   │   └── google.strategy.ts
│   │   ├── app.controller.ts
│   │   ├── app.module.ts
│   │   └── app.service.ts
│   ├── .env
│   ├── .eslintrc.js
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── App.tsx
│   │   └──
│   ├── .env
│   ├── .eslintrc.js
│   ├── package.json
│   └── tsconfig.json
├── .gitignore
├── package.json
└── README.md
```

## Technologies Used

### Backend

- NestJS
- TypeScript
- MySQL
- Passport
- Passport-Google-OAuth20

### Frontend

- React
- TypeScript
- react-google-login

## Contributing

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes.
4. Commit your changes (git commit -am 'Add new feature').
5. Push to the branch (git push origin feature-branch).
6. Create a new Pull Request.
