const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const boardModule = require('./modules/board.js');
const authorizationModule = require('./modules/authorization.js');
const userBoardListModule = require('./modules/userboardlist.js');
const registrationModule = require('./modules/registration.js');

const ticketModule = require('./modules/ticket.js');

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

boardModule.configBoardModule(app);
authorizationModule.configAuthorizationModule(app);
userBoardListModule.configUserBoardListModule(app);
registrationModule.configRegistrationModule(app);

ticketModule.configTicketModule(app);

app.listen(3000, function () {
    console.log("Start backend on 3000 port (espresso)");
});
