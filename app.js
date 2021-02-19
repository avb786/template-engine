const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHandleBars = require('express-handlebars')

const app = express();
app.set('view engine', 'ejs');
// app.engine('handleBars', expressHandleBars())
// app.engine('handleBars', expressHandleBars({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout'}))
// app.set('view engine','handleBars')
// app.set('view engine', 'pug'); // Sets data globally to Express application
app.set('views', path.join(__dirname, "views")); 

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
res.render('404', {pageTitle: 'Page Not Found'})
});

app.listen(3000);
