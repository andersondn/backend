import { Router } from "express";
import LoginController from '../modules/auth/controllers/loginController';
import SignUpController from '../modules/auth/controllers/signUpController';

const routes = Router();
const loginController = new LoginController();
const signUpController = new SignUpController();

routes.post(
    '/',
    loginController.validate,
    loginController.handler
)
routes.post(
    '/signUp',
    signUpController.validate,
    signUpController.handler
)

export default routes;