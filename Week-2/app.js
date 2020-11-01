'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const rootRoute = require('./routes/rootRoute.js');
const catRoute = require('./routes/catRoute.js');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}));

//routes
app.use('/', rootRoute);
app.use('/cat', catRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//const myArr = [3, 1, 17, 42, 73, 11, 2, 7];
//const mapArr = myArr.map(i => i * 3);
//const filterArr = myArr.filter(i => i > 10);
//const reduced = myArr.reduce((acc, i) => acc += i);
//console.log('original', myArr, 'map', mapArr, 'filter', filterArr, 'reduce', reduced);