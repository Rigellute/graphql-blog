// @flow
export default {
  Query: {
    async allPosts(
      root: void,
      { userId }: { userId: string },
      { fakeDB }: { fakeDB: T$FakeDB }
    ) {
      const user = await fakeDB.getUser(userId);
      return (
        [...user.posts].sort(
          (a, b) => (Number(a.id) < Number(b.id) ? 1 : -1)
        ) || []
      );
    },
  },
  Mutation: {
    async createUpdatePost(
      root: void,
      { userId, post }: { userId: string, post: T$PostType },
      { fakeDB }: { fakeDB: T$FakeDB }
    ) {
      return fakeDB.savePost(userId, post);
    },
  },
};
