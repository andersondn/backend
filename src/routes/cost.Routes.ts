import { Router } from "express";
import CreateCostController from "../modules/cost/controllers/createCostController";
import ListCostController from "../modules/cost/controllers/listCostsController";

const routes = Router();
const listCostController = new ListCostController();
const createCostController = new CreateCostController();

routes.get(
    '/',
    listCostController.handler
);

routes.post(
    '/',
    createCostController.validate,
    createCostController.handler
);
    

export default routes;