import { Router } from "express";
import userRoutes from './user.Routes'
import departmentRoutes from './department.Routes'
import costRoutes from './cost.Routes'

const routes = Router();

routes.get('/', (_, res) => res.send('Hello World'));

routes.use('/users', userRoutes)
routes.use('/departments', departmentRoutes)
routes.use('/costs', costRoutes)


export default routes