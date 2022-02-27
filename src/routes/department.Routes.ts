import { Router } from "express"
import CreateDepartmentController
    from '../modules/department/controllers/createDepartmentController';
import GetDepartmentController from "../modules/department/controllers/getDepartmentController";
import ListDepartmentController from '../modules/department/controllers/listDepartmentController';
import UpdateDepartmentController
    from '../modules/department/controllers/updateDepartmentController';

const routes = Router()
const listDepartmentController = new ListDepartmentController();
const createDepartmentController = new CreateDepartmentController()
const getDepartmentController = new GetDepartmentController()
const updateDepartmentController = new UpdateDepartmentController()


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

 routes.patch(
    '/:departmentId',
    updateDepartmentController.validate,
    updateDepartmentController.handler
 )
 
 export default routes