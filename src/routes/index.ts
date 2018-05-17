import * as express from 'express';

interface IRoute {
  method: 'post' | 'get';
  name: string;
  action: (req: express.Request, res: express.Response) => Promise<void>;
}

const buildRoute = (app: express.Application, { method, name, action }: IRoute) => {
  app[method](name, action);
};

const buildRoutes = (app: express.Application, routes: IRoute[]) => {
  for (const route of routes) {
    buildRoute(app, route);
  }
};

export { IRoute, buildRoutes };
