import { Router } from "express";
import CreateUserController from "../modules/user/controllers/createUserController";
import GetUserController from "../modules/user/controllers/getUserController";
import ListUserController from "../modules/user/controllers/listUserController";

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