"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexRouter = void 0;
const express_1 = require("express");
const index_1 = require("../../controller/index");
let indexRouter = express_1.Router();
exports.indexRouter = indexRouter;
indexRouter.get("/", index_1.index);
indexRouter.get('/hire', index_1.renderHirePage);
