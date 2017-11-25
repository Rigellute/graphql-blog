// @flow
import { makeExecutableSchema } from 'graphql-tools';
import gql from 'graphql-tag';
import resolvers from './resolvers';

// Define your types here.
const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
    body: String!
  }

  type Query {
    allPosts(userId: ID!): [Post!]!
  }
`;

export default makeExecutableSchema({ typeDefs, resolvers });
