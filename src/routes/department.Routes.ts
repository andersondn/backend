import { Router } from "express"
import CreateDepartmentController
    from '../modules/department/controllers/createDepartmentController';

const routes = Router()
const createDepartmentController = new CreateDepartmentController()

routes.post(
    '/',
    createDepartmentController.validate,
    createDepartmentController.handler
 )
 
 export default routes