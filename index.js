const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

app.use(express.static('./assets'));
// extract style and script from sub page into layout

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use(expressLayouts);
app.use('/',require('./routes'));
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function (err) {
    if(err){
        console.log(`Error in runnung the server: ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
});