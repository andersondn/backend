import { Router } from "express";
import userRoutes from './user.Routes'
import departmentRoutes from './department.Routes'

const routes = Router();

routes.get('/', (_, res) => res.send('Hello World'));

routes.use('/users', userRoutes)
routes.use('/departments', departmentRoutes)


export default routes