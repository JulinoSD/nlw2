import express from 'express';
import ClassesController from './controllers/ClassesController';
import connectionsController from './controllers/connectionsController';


const routes = express.Router();
const ClasseControllers = new ClassesController();
const connectionController = new connectionsController();

routes.get('/classes', ClasseControllers.index);
routes.post('/classes', ClasseControllers.create);

routes.post('/connections', connectionController.create)
routes.get('/connections', connectionController.index)

export default routes;