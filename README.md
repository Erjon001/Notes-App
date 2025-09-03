# Notes App

A modern, full-stack note-taking application built with React and Node.js. This app allows users to create, edit, delete, and organize their notes with features like tagging, pinning, and user authentication.

## Project Overview

This Notes App is a comprehensive solution for personal note management, featuring a clean and intuitive interface built with React and powered by a robust Node.js backend with MongoDB for data persistence.

## Key Features

### **User Authentication**
- **User Registration** - Create new accounts with email validation
- **Secure Login** - JWT-based authentication system
- **Password Security** - Toggle visibility for password fields
- **Profile Management** - User profile display with initials

### **Note Management**
- **Create Notes** - Add new notes with title, content, and tags
- **Edit Notes** - Modify existing notes seamlessly
- **Delete Notes** - Remove unwanted notes
- **Pin Notes** - Pin important notes to the top
- **Rich Content** - Support for detailed note content

### **Organization Features**
- **Tag System** - Organize notes with custom tags
- **Search Functionality** - Quick search through notes
- **Pin/Unpin** - Priority management for important notes
- **Date Tracking** - Automatic creation and modification timestamps

### **User Interface**
- **Responsive Design** - Works on desktop and mobile devices
- **Modern UI** - Clean, intuitive interface with TailwindCSS
- **Modal System** - Smooth add/edit note experience
- **Interactive Components** - Hover effects and smooth transitions

## Technology Stack

### **Frontend**
- **React 19** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **TailwindCSS 4** - Utility-first CSS framework
- **React Icons** - Beautiful icon library
- **React Modal** - Modal component for add/edit functionality

### **Backend**
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **JWT** - JSON Web Tokens for authentication
- **CORS** - Cross-origin resource sharing
- **Nodemon** - Development auto-restart

### **Development Tools**
- **ESLint** - Code linting and formatting
- **Vite** - Development server with HMR
- **dotenv** - Environment variable management

## Project Structure

```
Notes-App/
├── frontend/notes-app/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Cards/           # NoteCard, ProfileInfo
│   │   │   ├── Input/           # PasswordInput, TagInput
│   │   │   ├── Navbar/          # Navigation component
│   │   │   └── SearchBar/       # Search functionality
│   │   ├── pages/
│   │   │   ├── Home/            # Dashboard, AddEditNotes
│   │   │   ├── Login/           # Login page
│   │   │   └── SignUp/          # Registration page
│   │   └── utils/               # Helper functions
│   └── package.json
├── backend/
│   ├── models/                  # Database schemas
│   │   ├── user.model.js
│   │   └── note.model.js
│   ├── utilities.js             # JWT authentication
│   ├── config.json              # Database configuration
│   ├── index.js                 # Express server
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account or local MongoDB
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Erjon001/Notes-App.git
   cd Notes-App
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   ```

3. **Setup Frontend**
   ```bash
   cd ../frontend/notes-app
   npm install
   ```

4. **Environment Configuration**
   Create a `.env` file in the backend directory:
   ```env
   ACCESS_TOKEN_SECRET=your_jwt_secret_key
   ```

5. **Database Configuration**
   Update `backend/config.json` with your MongoDB connection string:
   ```json
   {
     "connectionString": "your_mongodb_connection_string"
   }
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm start
   ```
   Backend runs on: `http://localhost:8000`

2. **Start the Frontend Development Server**
   ```bash
   cd frontend/notes-app
   npm run dev
   ```
   Frontend runs on: `http://localhost:5173`

## API Endpoints

### Authentication
- `POST /create-account` - Register new user
- `POST /login` - User login

### Notes Management
- `GET /get-all-notes` - Retrieve all user notes
- `POST /add-note` - Create new note
- `PUT /edit-note/:noteId` - Update existing note
- `DELETE /delete-note/:noteId` - Delete note

## Security Features

- **JWT Authentication** - Secure token-based authentication
- **Input Validation** - Server-side validation for all inputs
- **CORS Configuration** - Controlled cross-origin requests
- **Password Handling** - Secure password input with visibility toggle

## Current Status

**In Development** - This project is actively being developed with the following completed features:
- User authentication system
- Note CRUD operations
- Responsive UI components
- Search functionality
- Tag system
- Pin/unpin functionality

## Contributing

This is a personal project, but suggestions and feedback are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the ISC License.

## Author

**Erjon001** - [GitHub Profile](https://github.com/Erjon001)

---

*Built with React, Node.js, and MongoDB*