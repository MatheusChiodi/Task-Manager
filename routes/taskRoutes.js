const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taksController'); // Nome corrigido!

router.post('/register', taskController.registerTask);
router.put('/edit/:id', taskController.editTask);
router.delete('/delete/:id', taskController.deleteTask);

module.exports = router;
