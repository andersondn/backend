import { Router } from "express";
import LoginController from '../modules/auth/controllers/loginController';

const routes = Router();
const loginController = new LoginController();

routes.post(
    '/',
    loginController.validate,
    loginController.handler
    )

export default routes;