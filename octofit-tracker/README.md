# OctoFit Tracker

A modern multi-tier fitness tracking application built with React 19, Node.js/Express, and MongoDB.

## Project Structure

```
octofit-tracker/
├── frontend/          # React 19 + Vite application
│   ├── src/
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
└── backend/           # Node.js + Express + TypeScript API
    ├── src/
    ├── models/        # Mongoose schemas
    ├── package.json
    └── tsconfig.json
```

## Requirements

- Node.js 16+
- MongoDB 5.0+
- npm or yarn

## Ports

- **Frontend**: 5173
- **Backend**: 8000
- **MongoDB**: 27017

## Setup Instructions

### Frontend Setup

```bash
cd octofit-tracker/frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Setup

```bash
cd octofit-tracker/backend
npm install
cp .env.example .env
npm run dev
```

The backend API will be available at `http://localhost:8000`

### MongoDB Setup

Make sure MongoDB is running on port 27017:

```bash
# If using Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest

# Or if MongoDB is installed locally
mongod --port 27017
```

## Available Scripts

### Frontend

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Backend

- `npm run dev` - Start development server with ts-node
- `npm run build` - Compile TypeScript
- `npm start` - Run compiled JavaScript
- `npm run lint` - Run ESLint

## Technology Stack

### Frontend
- React 19
- Vite
- TypeScript
- ESLint

### Backend
- Node.js
- Express
- TypeScript
- Mongoose (MongoDB ODM)
- CORS support

## API Endpoints

- `GET /` - Health check endpoint

## Features (In Development)

- User authentication
- Workout tracking
- Fitness goals
- Progress analytics
- Community features
