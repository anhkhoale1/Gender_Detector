const express = require('express');
const app = express();
const port = 3000;
const route = require('./routes/routes');
const db = require('mysql');

// default engine 
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());

// app.use(express.static('public'));
// app.use('/css', express.static(__dirname + 'public/css'));
// app.use('/js', express.static(__dirname + 'public/js'));

// set views with html
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});