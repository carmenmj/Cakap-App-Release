# Cakap App Release

Cakap App is a full-stack chat application featuring real-time messaging, group chats, and user authentication. The project is divided into a backend (Node.js/Express/MongoDB) and a frontend (React.js).

## Features

- User authentication (signup, login)
- Real-time chat (one-on-one and group chats)
- Group chat management (create, update, add/remove users)
- User profile management
- Responsive UI

## Getting Started

### Prerequisites
- Node.js (v14+)
- npm 
- MongoDB (local or cloud)

## For Web Access (Deployment)
https://cakap-chatapp.vercel.app/chats

## For Local Setup
### Backend Setup
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure environment variables (e.g., MongoDB URI, JWT secret) in a `.env` file.
4. Start the backend server:
   ```sh
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend app:
   ```sh
   npm start
   ```

The frontend will run on [http://localhost:3000](http://localhost:3000) and the backend on [http://localhost:5000](http://localhost:5000) by default.

## Folder Details

### Backend
- `server.js`: Entry point for the backend server
- `config/`: Database and token configuration
- `controllers/`: Route logic for users, chats, and messages
- `middleware/`: Authentication and error handling
- `models/`: Mongoose schemas for users, chats, and messages
- `routes/`: API endpoints

### Frontend
- `src/components/`: React components for chat, authentication, and UI
- `src/Pages/`: Main pages (Homepage, Chatpage)
- `src/config/`: Frontend configuration files
- `src/Context/`: React context for global state
- `src/data/`: Sample data

Made By: Carmen, Chelsea, Grace, Stephanie, Wendy.