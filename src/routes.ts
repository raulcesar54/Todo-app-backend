import { Router } from 'express'
import TaskController from './app/controlers/TaskController'

const router = Router();

router.get('/task', TaskController.list)
router.post('/task', TaskController.store)
router.put('/task/:id', TaskController.update)
router.delete('/task/:id', TaskController.delete)

export default router
