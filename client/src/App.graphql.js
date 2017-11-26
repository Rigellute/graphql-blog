import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
const GET_POSTS = gql`
  query {
    allPosts(userId: 1) {
      id
      title
      body
    }
  }
`;

export const getPosts = graphql(GET_POSTS, ({
  props: ({data: {allPosts}}) => ({
    allPosts
  })
}))
