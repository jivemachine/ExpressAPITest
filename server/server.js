const express = require('express');
const path = require('path');
const apiRouter = require('./routes');

let app = express();

app.use(express.json());

// give express access to all files in public directory
app.use(express.static(path.join(__dirname, '../client')));

app.use('/api', apiRouter);

app.listen(3000);