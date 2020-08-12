import express from 'express';
import ClassesController from './controllers/ClassesController';


const routes = express.Router();
const ClasseControllers = new ClassesController();

routes.get('/classes', ClasseControllers.index);
routes.post('/classes', ClasseControllers.create);

export default routes;