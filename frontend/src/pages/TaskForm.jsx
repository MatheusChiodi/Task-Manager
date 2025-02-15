import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function TaskForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const editingTask = location.state?.task || null;

  const [task, setTask] = useState(editingTask?.task || '');
  const [description, setDescription] = useState(
    editingTask?.description || ''
  );
  const [date, setDate] = useState(editingTask?.date || '');

  useEffect(() => {
    if (editingTask) {
      setTask(editingTask.task);
      setDescription(editingTask.description);
      setDate(editingTask.date);
    }
  }, [editingTask]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = editingTask
      ? `http://localhost:3000/tasks/edit/${editingTask.id}`
      : 'http://localhost:3000/tasks/register';
    const method = editingTask ? 'PUT' : 'POST';

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task, description, date }),
    });

    navigate('/list');
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-bold text-center mb-4">
        {editingTask ? 'Editar Task' : 'Cadastrar Task'}
      </h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Tarefa"
        className="w-full p-2 rounded bg-gray-700 mb-4"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descrição"
        className="w-full p-2 rounded bg-gray-700 mb-4"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full p-2 rounded bg-gray-700 mb-4"
        required
      />
      <button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700 p-2 rounded-lg font-bold"
      >
        {editingTask ? 'Atualizar' : 'Cadastrar'}
      </button>
    </motion.form>
  );
}
