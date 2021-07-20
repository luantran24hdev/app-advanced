// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./api/Configs/Database.config.js');
const personsRoute = require('./api/Routers/Persons.js');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log(`==== Database is connected with PATH : ${config.DB} ====`)  },
    err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/persons', personsRoute);

app.listen(PORT, function(){
    console.log('=== Server is running on Port:',PORT + " ====");
});