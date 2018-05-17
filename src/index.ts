import * as express from 'express';
import { json, urlencoded } from 'body-parser';
import { buildRoutes } from './routes';
import apiUser from './routes/api/user';

const app: express.Application = express();

app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Content-Type', 'application/json');
  next();
});

app.use(json());
app.use(urlencoded({ extended: true }));

buildRoutes(app, [apiUser]);

app.listen(4000, () => {
  // tslint:disable-next-line:no-console
  console.log('Node server listening on http://localhost:4000');
});
