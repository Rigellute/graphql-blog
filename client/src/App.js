import React, { Component } from 'react';
import { Jumbotron, Header } from './App.styles.js';
import { getPosts } from './App.graphql';

class App extends Component {
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
      </div>
    );
  }
}

export default getPosts(App);
