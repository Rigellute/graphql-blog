// @flow
import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import schema from './schema';
import { PORT, DATA_PATH } from './config';
import FakeDB from './fake-database';

(async function startServer() {
  const fakeDB = new FakeDB(DATA_PATH);
  await fakeDB.initialize();

  const app = express();
  app.use(
    '/graphql',
    bodyParser.json(),
    graphqlExpress({ schema, context: { fakeDB } })
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
