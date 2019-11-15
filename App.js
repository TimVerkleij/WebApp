const Express = require('express');

const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = Express();

app.use(morgan('dev'));
app.use(cookieParser());

app.use(Express.json());
app.use(Express.static('public/'));

app.listen(8080, () => console.info('Webserver is listening http://localhost:8080/'));
