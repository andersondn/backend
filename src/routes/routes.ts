import { Router } from "express";
import userRoutes from './user.Routes'

const routes = Router();

routes.get('/', (_, res) => res.send('Hello World'));

routes.use('/users', userRoutes)


export default routes