import { config  } from 'dotenv';
if(process.env.NODE_ENV !== "production") {
    config();
}
import  express, { NextFunction, Request, Response } from 'express';
import  exphbs from 'express-handlebars';
import path from 'path';
import { indexRouter } from './routes/index';
import compression from 'compression';

const app = express();

app.use(compression());
app.use(express.urlencoded({ extended : false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.engine("hbs", exphbs({defaultLayout: "main", extname: "hbs"}));
app.set("view engine", "hbs");

app.use("/", indexRouter);
app.use((req:Request, res:Response, next: NextFunction) => {
    res.render("pages/404", { page_name : "Page Not found"});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export {app};