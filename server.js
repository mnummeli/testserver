#!/usr/bin/env node

'use strict';

const PORT = 3000;
const express = require('express'),
      path = require('path'),
      app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/rs(|/*)', (req, res) => {
    console.log(`Accessing RESTful service.`);
    res.jsonp('RESTful service.');
});

app.use('*', (req, res) => {
    console.log(`Redirecting to /`);
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
});
