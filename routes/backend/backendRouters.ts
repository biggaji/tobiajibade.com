import { Router } from "express";
import { hireControl, contactControl } from '../../controller/backend/backendController'
let backendRouter = Router();
backendRouter.post("/contact", contactControl);
backendRouter.post("/hire", hireControl);
export { backendRouter };
