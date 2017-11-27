// @flow
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const CREATE_UPDATE_POST = gql`
  mutation createUpdatePost($post: NewPost!) {
    createUpdatePost(userId: 1, post: $post) {
      id
      title
      body
    }
  }
`;

const createUpdatePost = graphql(CREATE_UPDATE_POST, {
  name: 'createUpdatePost',
  // $FlowFixMe - these props should be inferred by flow from apollo
  props: ({ ownProps, createUpdatePost }) => ({
    ...ownProps,
    createUpdatePost: (post: T$PostType) =>
      createUpdatePost({
        variables: {
          post,
        },
        updateQueries: {
          getPosts: (prevResult, { mutationResult }) => ({
            ...prevResult,
            allPosts: [
              mutationResult.data.createUpdatePost,
              ...prevResult.allPosts,
            ],
          }),
        },
      }),
  }),
});

export default createUpdatePost;
