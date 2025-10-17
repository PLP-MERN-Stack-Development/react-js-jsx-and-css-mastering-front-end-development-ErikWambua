import React, { useState } from 'react';
import Button from './Button';
import Card from './Card';
import { useLocalStorage } from '../hooks/useLocalStorage';

/**
 * TaskManager component for managing tasks
 */
const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTaskText, setNewTaskText] = useState('');
  const [filter, setFilter] = useState('all');

  // Add a new task
  const addTask = (text) => {
    if (text.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text,
          completed: false,
          createdAt: new Date().toISOString(),
        },
      ]);
    }
  };

  // Toggle task completion status
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Clear all completed tasks
  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  // Filter tasks based on selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all' filter
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTaskText);
    setNewTaskText('');
  };

  // Task statistics
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-6">Task Manager</h2>

      {/* Task input form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            placeholder="Add a new task..."
            className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
          <Button type="submit" variant="primary">
            Add Task
          </Button>
        </div>
      </form>

      {/* Task stats */}
      <div className="grid grid-cols-3 gap-4 mb-6 text-center">
        <Card className="p-3 bg-blue-50 dark:bg-blue-900/20">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{totalTasks}</div>
          <div className="text-sm text-blue-600 dark:text-blue-400">Total</div>
        </Card>
        <Card className="p-3 bg-green-50 dark:bg-green-900/20">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">{pendingTasks}</div>
          <div className="text-sm text-green-600 dark:text-green-400">Pending</div>
        </Card>
        <Card className="p-3 bg-purple-50 dark:bg-purple-900/20">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{completedTasks}</div>
          <div className="text-sm text-purple-600 dark:text-purple-400">Completed</div>
        </Card>
      </div>

      {/* Filter buttons */}
      <div className="flex gap-2 mb-4 flex-wrap">
        <Button
          variant={filter === 'all' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setFilter('all')}
        >
          All ({totalTasks})
        </Button>
        <Button
          variant={filter === 'active' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setFilter('active')}
        >
          Active ({pendingTasks})
        </Button>
        <Button
          variant={filter === 'completed' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setFilter('completed')}
        >
          Completed ({completedTasks})
        </Button>
        {completedTasks > 0 && (
          <Button
            variant="danger"
            size="sm"
            onClick={clearCompleted}
            className="ml-auto"
          >
            Clear Completed
          </Button>
        )}
      </div>

      {/* Task list */}
      <div className="space-y-2">
        {filteredTasks.length === 0 ? (
          <Card className="p-8 text-center">
            <div className="text-gray-400 dark:text-gray-500 text-6xl mb-4">📝</div>
            <p className="text-gray-500 dark:text-gray-400">
              {tasks.length === 0 ? 'No tasks yet. Add your first task above!' : 'No tasks match the current filter.'}
            </p>
          </Card>
        ) : (
          filteredTasks.map((task) => (
            <Card
              key={task.id}
              className={`p-4 transition-all duration-200 ${
                task.completed ? 'opacity-75' : ''
              }`}
              hover
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-grow">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
                  />
                  <span
                    className={`flex-grow ${
                      task.completed
                        ? 'line-through text-gray-500 dark:text-gray-400'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {task.text}
                  </span>
                </div>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => deleteTask(task.id)}
                  aria-label="Delete task"
                >
                  Delete
                </Button>
              </div>
              {task.completed && (
                <p className="text-xs text-green-600 dark:text-green-400 mt-2 ml-8">
                  ✓ Completed
                </p>
              )}
            </Card>
          ))
        )}
      </div>
    </Card>
  );
};

export default TaskManager;