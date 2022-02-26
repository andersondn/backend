import { Router } from "express";
import CreateUserController from "../modules/user/useCase/createUser/createUserController";
import GetUserController from "../modules/user/useCase/getUser/getUserController";
import ListUserController from "../modules/user/useCase/listUser/listUserController";

const routes = Router();
const listUserController = new ListUserController();
const getUserController = new GetUserController();
const createUserController = new CreateUserController();

routes.get(
   '/',
    listUserController.handler
)

routes.get(
    '/:userId',
    getUserController.validate,
    getUserController.handler
 )
 
routes.post(
    '/',
    createUserController.validate,
    createUserController.handler
);


export default routes;