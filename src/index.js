const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.get("/", (req, res) => {
	res.send("<h2> Yes I'm working good. </h2>");
});
/* port define */
const _port = process.env.PORT || 4000;
app.listen(_port, () => {
	console.log(`Application listening on port: ${_port}`);
});