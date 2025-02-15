import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Pencil, Trash2 } from 'lucide-react';

export default function TaskList() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [modalValideTrash, setModalValideTrash] = useState(false);
  const [modalTaskId, setModalTaskId] = useState(null);
  const [modalText, setModalText] = useState('');

  const maskDate = (date) => {
    const d = new Date(date + 'T00:00:00');
    return d.toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:3000/tasks/list');
      const data = await response.json();
      setTasks((prevTasks) =>
        JSON.stringify(prevTasks) !== JSON.stringify(data) ? data : prevTasks
      );
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
    }
  };

  const handleEditTask = (task) => {
    navigate('/form', { state: { task } });
  };

  const handleModalDeleteTask = (taskId, taskName, taskDate) => {
    setModalValideTrash(true);
    setModalTaskId(taskId);
    setModalText(
      `Deseja excluir a tarefa "${taskName}" com data "${maskDate(taskDate)}" ?`
    );
  };

  const cancelModalDeleteTask = () => {
    setModalValideTrash(false);
    setModalTaskId(null);
    setModalText('');
  };

  const deleteTask = async () => {
    try {
      await fetch(`http://localhost:3000/tasks/delete/${modalTaskId}`, {
        method: 'DELETE',
      });
      setTasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== modalTaskId)
      );
      cancelModalDeleteTask();
      fetchTasks();
    } catch (error) {
      console.error('Erro ao excluir tarefa:', error);
    }
  };

  return (
    <>
      {tasks.length === 0 ? (
        <motion.div
          className="bg-gray-700 p-6 rounded-lg shadow-md overflow-x-auto mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-purple-600 font-semibold text-xl">Nenhuma tarefa cadastrada</p>
        </motion.div>
      ) : (
        <motion.div
          className="bg-gray-700 p-6 rounded-lg shadow-md w-full max-w-4xl overflow-x-auto mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-xl font-semibold text-center mb-4">
            Lista de Tasks
          </h1>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-lg min-w-[600px]">
              <thead>
                <tr className="bg-purple-600 text-white">
                  <th className="p-3">Tarefa</th>
                  <th className="p-3">Descrição</th>
                  <th className="p-3">Data</th>
                  <th className="p-3">Ações</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((t, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-600 hover:bg-gray-800"
                  >
                    <td className="p-3 break-words max-w-xs text-center">
                      {t.task}
                    </td>
                    <td className="p-3 break-words max-w-xs text-center">
                      {t.description}
                    </td>
                    <td className="p-3 text-gray-400 text-center">
                      {maskDate(t.date)}
                    </td>
                    <td className="p-3 flex gap-2 justify-center">
                      <button
                        className="bg-yellow-500 p-2 rounded hover:bg-yellow-600"
                        onClick={() => handleEditTask(t)}
                      >
                        <Pencil />
                      </button>
                      <button
                        className="bg-red-500 p-2 rounded hover:bg-red-600"
                        onClick={() =>
                          handleModalDeleteTask(t.id, t.task, t.date)
                        }
                      >
                        <Trash2 />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}

      {modalValideTrash && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-gray-900 font-medium text-center w-full">
              Deletar
            </h2>
            <p className="text-gray-900">{modalText}</p>
            <div className="flex gap-4 justify-center mt-4">
              <button
                className="bg-red-500 p-2 rounded hover:bg-red-600 w-[45%]"
                onClick={deleteTask}
              >
                Sim
              </button>
              <button
                className="bg-gray-500 p-2 rounded hover:bg-gray-600 w-[45%]"
                onClick={cancelModalDeleteTask}
              >
                Não
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
