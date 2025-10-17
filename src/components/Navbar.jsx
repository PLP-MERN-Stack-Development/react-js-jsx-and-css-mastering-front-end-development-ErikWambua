import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Button from './Button';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              PLP Task Manager
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#tasks"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Tasks
            </a>
            <a
              href="#posts"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Posts
            </a>
            <a
              href="#about"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              About
            </a>
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center space-x-4">
            <Button
              variant="secondary"
              size="sm"
              onClick={toggleTheme}
              className="flex items-center gap-2"
            >
              {isDark ? (
                <>
                  <span>🌞</span>
                  <span className="hidden sm:inline">Light</span>
                </>
              ) : (
                <>
                  <span>🌙</span>
                  <span className="hidden sm:inline">Dark</span>
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;