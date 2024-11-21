const { getUsers, postUsers, loginUser, forgotPassword, resetPassword} = require('../controllers/userController');
const {getProjects, createProject, updateProject, deleteProject } = require('../controllers/proyectController');
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController');
const { userValidation, validate } = require('../validations/userValidation');
const express = require('express');
const router = express.Router();

// users
router.get("/users", getUsers);
router.post("/users",userValidation,validate, postUsers);
// login
router.post('/login', loginUser);
// recovery password
router.post('/recovery', forgotPassword );
router.post('/recovery/:token', resetPassword)
// projects

router.get("/projects", getProjects);
router.post("/projects", createProject);
router.put("/projects/:id", updateProject);
router.delete("/projects/:id", deleteProject);

// Rutas para Tareas
router.get('/tasks', getTasks);
router.post('/tasks', createTask);
router.put('/tasks/:taskId', updateTask);
router.delete('/tasks/:taskId', deleteTask);




module.exports = router;