import { Router } from "express";
import CreateCostController from "../modules/cost/controllers/createCostController";
import GetCostController from "../modules/cost/controllers/getCostController";
import ListCostController from "../modules/cost/controllers/listCostsController";
import UpdateCostController from '../modules/cost/controllers/updateCostController';

const routes = Router();
const listCostController = new ListCostController();
const getCostController = new GetCostController();
const createCostController = new CreateCostController();
const updateCostController = new UpdateCostController();
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

routes.patch(
    '/:costId',
    updateCostController.validate,
    updateCostController.handler
);


    

export default routes;