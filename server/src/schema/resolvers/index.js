// @flow
import jwt from 'jsonwebtoken';

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
      { fakeDB, req }: { fakeDB: T$FakeDB }
    ) {
      console.log(Object.keys(req));
      return fakeDB.savePost(userId, post);
    },
    async login(root, { email, password }, { fakeDB }: { fakeDB: T$FakeDB }) {
      const hashPassword = pass => `${pass}#`;

      const data = await fakeDB.readDataFromFile();

      const user = data.find(
        usr => usr.password === hashPassword(password) && usr.email === email
      );

      if (!user) {
        throw new Error('No User found');
      }

      const token = jwt.sign(
        {
          userId: user.id,
        },
        'hello'
      );

      return token;
    },
  },
};
