"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const dotenv_1 = require("dotenv");
if (process.env.NODE_ENV !== "production") {
    dotenv_1.config();
}
const express_1 = __importDefault(require("express"));
const express_handlebars_1 = __importDefault(require("express-handlebars"));
const path_1 = __importDefault(require("path"));
const index_1 = require("./routes/index");
const backendRouters_1 = require("./routes/backend/backendRouters");
const app = express_1.default();
exports.app = app;
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.engine("hbs", express_handlebars_1.default({ defaultLayout: "main", extname: "hbs" }));
app.set("view engine", "hbs");
app.use("/", index_1.indexRouter);
app.use("/B", backendRouters_1.backendRouter);
app.use((req, res, next) => {
    res.render("pages/404", { page_name: "404 - Not found" });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
