import express from 'express';
import ClassesController from './controller/ClassesController';
import ConnectionsController from './controller/ConnectionsController';

const routes = express.Router();
const ClessesControllers = new ClassesController();
const ConnectionsControllers = new ConnectionsController();

routes.get('/classes', ClessesControllers.index);
routes.post('/classes', ClessesControllers.create);

routes.post('/connections', ConnectionsControllers.create);
routes.get('/connections', ConnectionsControllers.index);


export default routes;