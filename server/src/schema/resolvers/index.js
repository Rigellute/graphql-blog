// @flow
export default {
  Query: {
    async allPosts(root: void, { userId }: { userId: string }) {
      console.log(userId);
      return [{ id: 1, title: 'hello', body: 'world' }];
    },
  },
  Mutation: {
    async createUpdatePost(
      root: void,
      { userId, post }: { userId: string, post: T$PostType }
    ) {
      console.log(userId);
      return {
        ...post,
        id: 23,
      };
    },
  },
};
