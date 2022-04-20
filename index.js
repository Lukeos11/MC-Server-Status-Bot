const express = require('express');
const app = express();
require('dotenv').config();
const connection = require('./mysql')

connection.ping()

app.get('/', (req, res) => { res.status(200).send('I\'m Working!') });

app.listen(80, () => console.log('listening on http://localhost:80/'));