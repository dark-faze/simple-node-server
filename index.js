const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');

require('./db/conn')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.use('/users', require('./controllers/users.controller'));

const port = process.env.PORT;

app.listen(port, function () {
    console.log('Server listening on port ' + port);
});