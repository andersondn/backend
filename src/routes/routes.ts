import { Router } from "express";
import userRoutes from './user.Routes'
import departmentRoutes from './department.Routes'
import costRoutes from './cost.Routes'
import loginRoutes from './login.Routes'

const routes = Router();

routes.get('/', (_, res) => res.send('Hello World'));

routes.use('/users', userRoutes)
routes.use('/departments', departmentRoutes)
routes.use('/costs', costRoutes)
routes.use('/login', loginRoutes)

export default routes