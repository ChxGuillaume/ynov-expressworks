const express = require('express');
const app = express();
const port = process.argv[2];

app.get('/search', function (req, res) {
    res.end(JSON.stringify(req.query));
});

app.listen(port);
