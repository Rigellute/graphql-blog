// @flow
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const CREATE_UPDATE_POST = gql`
  mutation createUpdatePost($post: Post!) {
    createUpdatePost(userId: 1, post: $post) {
      id
      title
      body
    }
  }
`;

const createUpdatePost = graphql(CREATE_UPDATE_POST, ({
  name: 'createUpdatePost',
  props: ownProps => ({
    ...ownProps,
    createUpdatePost: (post: T$PostType) => ownProps.createUpdatePost({
      variables: {
        post,
      }
    })
  })
}));

export default createUpdatePost;
