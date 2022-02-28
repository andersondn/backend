import { Router } from "express";
import CreateCostController from "../modules/cost/controllers/createCostController";
import DeleteCostController from "../modules/cost/controllers/deleteCostController";
import GetCostController from "../modules/cost/controllers/getCostController";
import ListCostController from "../modules/cost/controllers/listCostsController";
import UpdateCostController from '../modules/cost/controllers/updateCostController';

const routes = Router();
const listCostController = new ListCostController();
const getCostController = new GetCostController();
const createCostController = new CreateCostController();
const updateCostController = new UpdateCostController();
const deleteCostController = new DeleteCostController();

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


routes.delete(
    '/:costId',
    deleteCostController.validate,
    deleteCostController.handler
);

    

export default routes;