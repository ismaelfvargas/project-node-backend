import { Router } from 'express';
import compromissosRouter from "./compromissos.routes";

const routes = Router();

routes.use('/compromissos', compromissosRouter);

export default routes;