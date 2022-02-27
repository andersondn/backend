import { Router } from "express"
import CreateDepartmentController
    from '../modules/department/controllers/createDepartmentController';
import ListDepartmentController from '../modules/department/controllers/listDepartmentController';

const routes = Router()
const listDepartmentController = new ListDepartmentController();
const createDepartmentController = new CreateDepartmentController()

routes.get(
    '/',
    listDepartmentController.handler
 )

routes.post(
    '/',
    createDepartmentController.validate,
    createDepartmentController.handler
 )
 
 export default routes