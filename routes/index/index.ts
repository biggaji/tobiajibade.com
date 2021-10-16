import { Router } from 'express';
import { index } from '../../controller/index';
let indexRouter = Router();
indexRouter.get("/", index);
export { indexRouter };