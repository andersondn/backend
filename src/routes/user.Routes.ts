import { Router } from "express";
import CreateUserController from "../modules/user/controllers/createUserController";
import GetUserController from "../modules/user/controllers/getUserController";
import ListUserController from "../modules/user/controllers/listUserController";
import UpdateUserController from '../modules/user/controllers/updateUserController';
import DeleteUserController from '../modules/user/controllers/deleteUserController';

const routes = Router();
const listUserController = new ListUserController();
const getUserController = new GetUserController();
const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

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

routes.patch(
    '/:userId',
    updateUserController.validate,
    updateUserController.handler
);

routes.delete(
    '/:userId',
    deleteUserController.validate,
    deleteUserController.handler
 )


export default routes;