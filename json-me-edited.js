const express = require('express');
const app = express();
const port = process.argv[2];

app.use(express.json());

app.get('/books', function (req, res) {
    /* return with application/html content-type
    res.send(JSON.stringify({
        result: req.body.str.toUpperCase(),
    })); */

    // return with application/json content-type
    res.json({
        result: req.body.str.toUpperCase(),
    });
});

app.listen(port);
