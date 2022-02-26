import { Router } from "express";

const routes = Router();

routes.get('/', (_, res) => res.send('Hello World'));


export default routes