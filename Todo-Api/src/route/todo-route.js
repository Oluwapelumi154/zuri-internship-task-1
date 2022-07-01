const express = require('express');
const controller = require('../controller');
const router = express.Router();
router.post('/add', controller.createTask);
router.get('/', controller.getAllTask);
router
  .route('/:id')
  .get(controller.getTask)
  .patch(controller.updateTask)
  .delete(controller.deleteTask);

module.exports = router;
