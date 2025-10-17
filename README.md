# PLP Task Manager - React.js & Tailwind CSS Assignment

A modern, responsive task management application built with React.js and Tailwind CSS that demonstrates component architecture, state management, hooks usage, and API integration.

## 🚀 Features

- **Task Management**: Add, complete, delete, and filter tasks
- **Dark/Light Mode**: Theme switcher with persistent preferences
- **API Integration**: Fetch and display data from JSONPlaceholder API
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Local Storage**: Tasks and theme preferences persist between sessions
- **Search & Pagination**: Search through API data with pagination

## 🛠️ Tech Stack

- **Frontend**: React.js 18, JSX
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **State Management**: React Hooks (useState, useEffect, useContext)
- **API**: JSONPlaceholder REST API
- **Deployment**: Vercel / Localhost

## 📦 Installation & Setup

### ⚙️ Running Locally

To run the app on your local machine:

```bash
# 1. Clone the repository
git clone <your-repository-url>
cd plp-task-manager

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open your browser and visit:  
👉 **http://localhost:5173**

You’ll see your app running locally.

---

### 🌐 Live Deployment

The live project is available at:  
👉 **https://plp-taskmanager.netlify.app/**

---

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx      # Button with variants
│   ├── Card.jsx        # Card layout component
│   ├── Navbar.jsx      # Navigation with theme toggle
│   ├── Footer.jsx      # Site footer
│   ├── TaskManager.jsx # Task management functionality
│   └── APIData.jsx     # API integration component
├── context/
│   └── ThemeContext.jsx # Theme management context
├── hooks/
│   └── useLocalStorage.js # Custom hook for localStorage
├── api/
│   └── jsonPlaceholder.js # API service functions
└── App.jsx             # Main application component
```

---

## 🎯 Key Components

### TaskManager
- Add, complete, and delete tasks  
- Filter tasks (All, Active, Completed)  
- Persistent storage using localStorage  
- Task statistics display  

### APIData
- Fetches posts from JSONPlaceholder API  
- Search functionality  
- Pagination  
- Loading and error states  

### Theme System
- Light/Dark mode toggle  
- Persistent theme preferences  
- Smooth transitions  

---

## 🔧 Custom Hooks

### useLocalStorage
Persists state in localStorage automatically:

```jsx
const [tasks, setTasks] = useLocalStorage('tasks', []);
```

---

## 🌐 API Integration

The app integrates with JSONPlaceholder API to:
- Fetch posts with pagination  
- Handle loading and error states  
- Implement search functionality  
- Display API data in a responsive grid  

---

## 📱 Responsive Design

- Mobile-first approach  
- Responsive grid layouts  
- Adaptive navigation  
- Touch-friendly interactions  

---

## 👨‍💻 Developer

Developed by **Erick Wambua** as part of the **PLP Web Development Assignment**.

---

## 📝 License

This project is created for educational purposes as part of the **PLP curriculum**.

---

## 🚀 Deployment Summary

The app is available locally at: **http://localhost:5173**  
And publicly at: **https://plp-taskmanager.netlify.app/**
