// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'milligram';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import blogApp from './reducers';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:9000/graphql' }),
  cache: new InMemoryCache(),
});

const store = createStore(blogApp);

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

registerServiceWorker();
