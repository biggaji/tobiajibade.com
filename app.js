// require dotenv libary to load all enviroment variabkes
require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const indexRouter = require("./routes/index/index");
// Instanciate the app 
const app = express();

// public configs middleware
app.use(express.static(path.join(__dirname, "public")));

// Handlebars configs

app.engine('handlebars', exphbs({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Index router
app.use('/', indexRouter);

// The 404 handler should be below all functions

app.use(function (req, res, next) {
    res.status(404).render("pages/404", { page_name: "Page not found" });
});



const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log("Server running on ", PORT));