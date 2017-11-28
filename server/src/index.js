// @flow
import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import cors from 'cors';
import schema from './schema';
import { PORT, DATA_PATH } from './config';
import FakeDB from './fake-database';

(async function startServer() {
  const fakeDB = new FakeDB(DATA_PATH);
  await fakeDB.initialize();

  const app = express();

  app.use(cors());

  app.use();

  app.use('/graphql', bodyParser.json(), req =>
    graphqlExpress({ schema, context: { fakeDB, req } })
  );

  app.use(
    '/graphiql',
    graphiqlExpress({
      endpointURL: '/graphql',
    })
  );

  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`GraphQL server running on port ${PORT}.`);
  });
})();
