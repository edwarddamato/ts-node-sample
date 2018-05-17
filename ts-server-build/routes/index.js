"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var buildRoute = function (app, _a) {
    var method = _a.method, name = _a.name, action = _a.action;
    app[method](name, action);
};
var buildRoutes = function (app, routes) {
    for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
        var route = routes_1[_i];
        buildRoute(app, route);
    }
};
exports.buildRoutes = buildRoutes;
