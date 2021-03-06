// @flow
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import type { OperationComponent } from 'react-apollo';
export const GET_POSTS = gql`
  query getPosts {
    allPosts(userId: 1) {
      id
      title
      body
    }
  }
`;

export type Response = {
  allPosts: Array<T$PostType>,
};

const getPosts: OperationComponent<Response> = graphql(GET_POSTS, {
  props: ({ data: { allPosts = [] } }) => ({
    allPosts,
  }),
});

export default getPosts;
