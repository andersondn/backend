import { Router } from "express";
import CreateCostController from "../modules/cost/controllers/createCostController";
import GetCostController from "../modules/cost/controllers/getCostController";
import ListCostController from "../modules/cost/controllers/listCostsController";

const routes = Router();
const listCostController = new ListCostController();
const getCostController = new GetCostController();
const createCostController = new CreateCostController();

routes.get(
    '/',
    listCostController.handler
);

routes.get(
    '/:costId',
    getCostController.validate,
    getCostController.handler
)


routes.post(
    '/',
    createCostController.validate,
    createCostController.handler
);
    

export default routes;