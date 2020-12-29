const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

// Instanciate the app 
const app = express();


// public configs middleware

app.use(express.static(__dirname, + 'public'));

// Handlebars configs

app.engine('handlebars', exphbs({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log("Server running 🚀🚀"));