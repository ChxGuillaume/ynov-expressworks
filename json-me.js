const fs = require('fs');
const express = require('express');
const app = express();
const port = process.argv[2];
const filename = process.argv[3];

app.get('/books', function (req, res) {
    res.json(JSON.parse(fs.readFileSync(filename)));
});

app.listen(port);
