import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import TaskManager from './components/TaskManager';
import APIData from './components/APIData';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Hero Section */}
          <section className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              PLP Task Manager
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A modern, responsive task management application built with React.js and Tailwind CSS. 
              Stay organized and boost your productivity.
            </p>
          </section>

          {/* Task Manager Section */}
          <section id="tasks">
            <TaskManager />
          </section>

          {/* API Integration Section */}
          <section id="posts">
            <APIData />
          </section>

          {/* Features Section */}
          <section id="features" className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 dark:text-blue-400 text-xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast & Responsive</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Built with modern React.js and optimized for all devices.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 dark:text-green-400 text-xl">🌙</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Dark Mode</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Toggle between light and dark themes for comfortable viewing.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 dark:text-purple-400 text-xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">API Integration</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Real-time data fetching from external APIs with search and pagination.
              </p>
            </div>
          </section>
        </div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;