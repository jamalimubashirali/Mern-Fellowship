import express from 'express';

// Controller Imports
import { getAllTasks , addNewTask, updateTaskbyId, getTaskById, deleteTaskById } from '../controllers/allTasks.js';


// Router initalization
const router = express.Router();


// Api routes
router.get('/', getAllTasks);
router.post('/', addNewTask);
router.route('/:id').get(getTaskById).delete(deleteTaskById);
router.patch('/:id', updateTaskbyId);



export default router;