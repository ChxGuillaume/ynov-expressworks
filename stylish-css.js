const express = require('express');
const app = express();
const port = process.argv[2];
const filename = process.argv[3];

app.use(require('stylus').middleware(filename));
app.use(express.static(filename));

app.listen(port);