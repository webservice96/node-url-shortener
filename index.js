const express    = require('express');
const bodyParser = require('body-parser');
const app = express();

/* port define */
const _port = process.env.PORT || 4000;
app.listen(_port, ()=>{
	console.log(`Application listening on port: ${_port}`);
});