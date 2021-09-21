const express = require('express');
const bP = require('body-parser');
const signup = require('./controllers/signup');
const login = require('./controllers/login');
const app = express();

/* Middlewares */
app.use(bP.json());

/* Router */
app.use(signup);
app.use(login);

/* port define */
const _port = process.env.PORT || 4000;
app.listen(_port, () => {
	console.log(`Application listening on port: ${_port}`);
});