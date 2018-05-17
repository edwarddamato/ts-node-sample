import * as express from 'express';
import { Api } from '../../../api/github';

export default {
  method: 'get',
  name: '/api/user',
  action: async (req: express.Request, res: express.Response) => {
    try {
      const fetchResults = await Api.fetch(req.query.username);
      res.send(fetchResults);
    } catch (err) {
      res.status(500).send(err);
    }
  }
};
