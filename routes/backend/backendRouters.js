"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.backendRouter = void 0;
const express_1 = require("express");
const backendController_1 = require("../../controller/backend/backendController");
let backendRouter = express_1.Router();
exports.backendRouter = backendRouter;
backendRouter.post("/contact", backendController_1.contactControl);
backendRouter.post("/hire", backendController_1.hireControl);
