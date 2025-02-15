const Task = require('../models/Task');

const registerTask = async (req, res) => {
  const { task, description, date } = req.body;
  try {
    const newTask = await Task.create({ task, description, date });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar a tarefa', error });
  }
};

const editTask = async (req, res) => {
  const { task, description, date } = req.body;
  const { id } = req.params;
  try {
    const updatedTask = await Task.update(
      { task, description, date },
      { where: { id } }
    );
    res.status(200).json({ message: 'Tarefa atualizada!', updatedTask });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao editar a tarefa', error });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedRows = await Task.destroy({ where: { id } });

    if (deletedRows === 0) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }

    res.status(200).json({ message: 'Tarefa deletada com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir a tarefa', error });
  }
};


module.exports = { registerTask, editTask, deleteTask };
