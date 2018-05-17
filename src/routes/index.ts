const buildRoute = (app, { method, name, action }) => {
  app[method](name, action);
};

const buildRoutes = (app, routes) => {
  for (const route of routes) {
    buildRoute(app, route);
  }
};
export { buildRoutes };
