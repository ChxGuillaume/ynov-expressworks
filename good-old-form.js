const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.argv[2];
const filename = process.argv[3];

app.use(bodyParser.urlencoded({extended: false}));

app.post('/form', function (req, res) {
    res.end(req.body.str.split('').reverse().join(''));
});

app.listen(port);