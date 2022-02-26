import { Router } from "express";
import CreateUserController from "../modules/user/useCase/createUser/createUserController";
import ListUserController from "../modules/user/useCase/listUser/listUserController";

const routes = Router();
const listUserController = new ListUserController();
const createUserController = new CreateUserController();

routes.get(
   '/',
    listUserController.handler
)

routes.post(
    '/',
    createUserController.validate,
    createUserController.handler
);


export default routes;