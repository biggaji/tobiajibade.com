import { Router } from 'express';
import { index, renderHirePage } from '../../controller/index';
let indexRouter = Router();
indexRouter.get("/", index);
indexRouter.get('/hire', renderHirePage);
export { indexRouter };