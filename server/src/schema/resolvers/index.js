// @flow
export default {
  Query: {
    async allPosts(root: void, { userId }: { userId: string }) {
      return [{ id: 1, title: 'hello', body: 'world' }];
    },
  },
};
