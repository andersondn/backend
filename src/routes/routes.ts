import { Router } from "express";
import userRoutes from './user.Routes'
import departmentRoutes from './department.Routes'
import costRoutes from './cost.Routes'
import loginRoutes from './login.Routes'
import authMiddleware from '../shared/infra/http/express/middleware/AuthMiddleware';

const routes = Router();

routes.get('/', (_, res) => res.send('Hello World'));

routes.use('/users', authMiddleware, userRoutes)
routes.use('/departments', authMiddleware, departmentRoutes)
routes.use('/costs', authMiddleware, costRoutes)
routes.use('/login', loginRoutes)

export default routes