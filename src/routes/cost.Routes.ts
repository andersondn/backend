import { Router } from "express";
import CreateCostController from "../modules/cost/controllers/createCostController";

const routes = Router();
const createCostController = new CreateCostController();

routes.post(
    '/',
    createCostController.validate,
    createCostController.handler
);
    

export default routes;