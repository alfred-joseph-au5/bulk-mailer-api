const express = require('express');
const bodyParser = require('body-parser');
var hbs = require('hbs');
require('dotenv').config();

const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const mailRoutes = require('./routes/mail.routes');

const middleware = require('./middlewares/jwt.middleware');

const app = express();
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'hbs');

app.use('/', authRoutes);
app.use(middleware.verifyToken);
// app.use('/', middleware.verifyToken, userRoutes);
app.use('/', userRoutes);
app.use('/', mailRoutes);

app.listen(process.env.PORT || 59866, ()=>{
    console.log('Listening on ', process.env.PORT || 59866 );
});