const router = require('express').Router()

const taskController = require('./controller/taskController')

router.post('/addtask',taskController.addTask)
router.get('/viewtask',taskController.viewTask)
router.get('/loadtask/:taskid',taskController.loadTask)
router.post('/update/:taskid',taskController.updateTask)
router.post('/delete/:taskid',taskController.deleteTask)

module.exports = router