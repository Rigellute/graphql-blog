// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { Jumbotron, Header } from './App.styles.js';
import getPosts from './graphql/get-posts';
import createUpdatePost from './graphql/create-update-post';
import { onUpdateField } from './actions';

type Props = {
  allPosts: Array<T$PostType>,
  onUpdateField: ({ id?: string | number, prop: 'title' | 'body', text: string }) => void,
  activePost: T$PostType,
  createUpdatePost: (post: T$PostType) => Promise<void>,
};

const mapStateToProps = state => ({
  activePost: state.blog.activePost,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onUpdateField
}, dispatch)

class App extends Component<Props> {
  onSave = async (e) => {
    e.preventDefault();
    try {
      await this.props.createUpdatePost(this.props.activePost);
    } catch (e) {
      alert(e.message);
    }
  }
  render() {
    const { title, body } = this.props.activePost;
    return (
      <div>
        <Jumbotron>
          <Header>GraphQL Blog</Header>
        </Jumbotron>
        <form>
          <fieldset>
            <label>Title</label>
            <input
              onChange={e => this.props.onUpdateField({prop: 'title', text: e.target.value})}
              value={title}
              type="text"
              placeholder="Type here..." />
            <label>Body</label>
            <textarea
              placeholder="Type here..."
              onChange={e => this.props.onUpdateField({prop: 'body', text: e.target.value})}
              value={body} />
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  getPosts,
  createUpdatePost
)(App);
