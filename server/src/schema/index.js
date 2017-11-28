// @flow
import { makeExecutableSchema } from 'graphql-tools';
import gql from 'graphql-tag';
import resolvers from './resolvers';

const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
    body: String!
  }

  type Query {
    allPosts(userId: ID!): [Post!]!
  }

  type Mutation {
    createUpdatePost(userId: ID!, post: NewPost!): Post
    login(email: String!, password: String!): String
  }

  input NewPost {
    title: String!
    body: String!
    id: ID
  }
`;

export default makeExecutableSchema({ typeDefs, resolvers });
