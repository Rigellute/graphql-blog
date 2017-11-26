// @flow
import React, { Component } from 'react';
import { Jumbotron, Header } from './App.styles.js';
import { getPosts } from './graphql/get-posts';

type Props = {
  allPosts: Array<T$PostType>
};

class App extends Component<Props> {
  render() {
    return (
      <div>
        <Jumbotron>
          <Header>GraphQL Blog</Header>
        </Jumbotron>
        <form>
          <fieldset>
            <label>Title</label>
            <input type="text" placeholder="Type here..." />
            <label>Body</label>
            <textarea placeholder="Type here..." />
            <input className="button-primary" type="submit" value="Send" />
          </fieldset>
        </form>
        <div>
          {(this.props.allPosts).map(post => <div key={post.id}>{post.title}</div>)}
        </div>
      </div>
    );
  }
}

export default getPosts(App);
