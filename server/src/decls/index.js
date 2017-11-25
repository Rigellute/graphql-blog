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
