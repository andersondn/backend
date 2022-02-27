import { Router } from "express"
import CreateDepartmentController
    from '../modules/department/controllers/createDepartmentController';
import GetDepartmentController from "../modules/department/controllers/getDepartmentController";
import ListDepartmentController from '../modules/department/controllers/listDepartmentController';

const routes = Router()
const listDepartmentController = new ListDepartmentController();
const createDepartmentController = new CreateDepartmentController()
const getDepartmentController = new GetDepartmentController()
routes.get(
    '/',
    listDepartmentController.handler
 )

 routes.get(
    '/:departmentId',
    getDepartmentController.validate,
    getDepartmentController.handler
 )

routes.post(
    '/',
    createDepartmentController.validate,
    createDepartmentController.handler
 )
 
 export default routes