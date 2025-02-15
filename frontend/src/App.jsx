import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TaskForm from './pages/TaskForm.jsx';
import TaskList from './pages/TaskList.jsx';
import Home from './pages/Home.jsx';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
        <motion.nav
          className="mb-6 bg-gray-700 p-4 md:rounded-2xl shadow-lg text-center w-full max-w-md fixed md:top-4 top-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex space-x-4 justify-between">
            <li>
              <Link
                to="/"
                className="text-purple-400 hover:text-purple-300 font-semibold"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/form"
                className="text-purple-400 hover:text-purple-300 font-semibold"
              >
                Cadastrar Task
              </Link>
            </li>
            <li>
              <Link
                to="/list"
                className="text-purple-400 hover:text-purple-300 font-semibold"
              >
                Listar Tasks
              </Link>
            </li>
          </ul>
        </motion.nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<TaskForm />} />
          <Route path="/list" element={<TaskList />} />
        </Routes>
      </div>
    </Router>
  );
}
