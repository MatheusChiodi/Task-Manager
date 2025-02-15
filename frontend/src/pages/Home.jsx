import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <motion.div
      className="text-center p-8 bg-gray-800 rounded-lg shadow-lg w-full max-w-2xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Bem-vindo ao Gerenciador de Tasks!
      </motion.h2>
      <motion.p
        className="text-lg mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Aqui você pode organizar suas tarefas de forma prática e eficiente.
        Cadastre novas tarefas, edite e remova com facilidade.
      </motion.p>
      <motion.div
        className="flex justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <Link to="/form">
          <motion.button
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Cadastrar Task
          </motion.button>
        </Link>
        <Link to="/list">
          <motion.button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Lista de Tasks
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
