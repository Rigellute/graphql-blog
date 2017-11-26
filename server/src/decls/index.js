/* eslint-disable no-undef */

declare type T$PostType = {
  id?: number,
  title: string,
  body: string,
};

declare type T$UserType = {
  id: number | string,
  userName: string,
  posts: Array<T$PostType>,
};

declare class T$FakeDB {
  initialize: () => Promise<void>;
  getUser: (userId: string | number) => Promise<T$UserType>;
  savePost: (
    userId: $PropertyType<T$UserType, 'id'>,
    post: T$PostType
  ) => Promise<T$PostType>;
  writeDataToFile: (data: Array<T$UserType>) => void;
}
