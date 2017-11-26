// @flow
import { promisify } from 'util';
import fs from 'fs';
import upsertArray from '../utils/upsert-array';

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

export default class FakeDB {
  constructor(pathToData: string) {
    this.pathToData = pathToData;
  }

  pathToData: string;

  async initialize() {
    await this.readDataFromFile();
  }

  async seedData(): Promise<Array<T$UserType>> {
    const seed = Array({
      id: 1,
      userName: 'Alex',
      posts: [
        {
          id: 1,
          title: 'Things I like to do',
          body: 'Code, play the guitar and piano, more coding.',
        },
      ],
    });

    await this.writeDataToFile(seed);

    return seed;
  }

  async getUser(userId: string | number): Promise<T$UserType> {
    const data = await this.readDataFromFile();
    const user = data.find(usr => Number(usr.id) === Number(userId));
    if (!user) {
      throw Error(`No user found with ID ${userId}`);
    }

    return user;
  }

  async savePost(
    userId: $PropertyType<T$UserType, 'id'>,
    post: T$PostType
  ): Promise<T$PostType> {
    const data = await this.readDataFromFile();
    const userIndex = data.findIndex(usr => Number(usr.id) === Number(userId));

    const user = data[userIndex];

    if (!user) {
      throw new Error(`No user found with ID ${userId}`);
    }

    const postIndex = user.posts.findIndex(
      pst => Number(pst.id) === Number(post.id)
    );

    const newOrUpdatedPost = {
      ...post,
      ...(postIndex > -1 ? {} : { id: user.posts.length + 1 }),
    };

    const newPostArray = upsertArray({
      indexToUpdate: postIndex,
      itemToUpsert: newOrUpdatedPost,
      array: user.posts,
    });

    await this.writeDataToFile(
      upsertArray({
        itemToUpsert: {
          ...user,
          posts: newPostArray,
        },
        indexToUpdate: userIndex,
        array: data || [],
      })
    );

    return newOrUpdatedPost;
  }

  async readDataFromFile(): Promise<Array<T$UserType>> {
    try {
      const data: string = await readFileAsync(this.pathToData, {
        encoding: 'utf8',
      });

      return JSON.parse(data);
    } catch (e) {
      if (e.code === 'ENOENT') {
        const data = await this.seedData();
        return data;
      }
      throw e;
    }
  }

  async writeDataToFile(data: Array<T$UserType>) {
    await writeFileAsync(this.pathToData, JSON.stringify(data, null, 2));
  }
}
