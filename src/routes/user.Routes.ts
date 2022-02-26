import { Router } from "express";
import CreateUserController from "../modules/user/useCase/createUserController";

const routes = Router();
const createUserController = new CreateUserController();

routes.post(
    '/',
    createUserController.validate,
    createUserController.handler
     );

export default routes;