"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var body_parser_1 = require("body-parser");
var routes_1 = require("./routes");
var user_1 = require("./routes/api/user");
var app = express();
app.use(function (_, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Content-Type', 'application/json');
    next();
});
app.use(body_parser_1.json());
app.use(body_parser_1.urlencoded({ extended: true }));
routes_1.buildRoutes(app, [user_1.default]);
app.listen(4000, function () {
    // tslint:disable-next-line:no-console
    console.log('Node server listening on http://localhost:4000');
});
