// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import {
  Jumbotron,
  Header,
  FlexContainer,
  PostList,
  FlexChild,
} from './App.styles.js';
import getPosts from './graphql/get-posts';
import createUpdatePost from './graphql/create-update-post';
import { onUpdateField } from './actions';
import PostForm from './components/PostForm';

type Props = {
  allPosts: Array<T$PostType>,
  onUpdateField: ({
    id?: string | number,
    prop: 'title' | 'body',
    text: string,
  }) => void,
  activePost: T$PostType,
  createUpdatePost: (post: T$PostType) => Promise<void>,
};

const mapStateToProps = state => ({
  activePost: state.blog.activePost,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onUpdateField,
    },
    dispatch
  );

class App extends Component<Props> {
  onSubmit = async e => {
    e.preventDefault();
    try {
      await this.props.createUpdatePost(this.props.activePost);
    } catch (e) {
      alert(e);
    }
  };

  handleFormUpdate = (prop: 'title' | 'body') => (event: Event) =>
    this.props.onUpdateField({ prop, text: event.target.value });

  render() {
    return (
      <div>
        <Jumbotron>
          <Header>GraphQL Blog</Header>
        </Jumbotron>
        <FlexContainer>
          <FlexChild>
            <h3>Create new post</h3>
            <PostForm
              onUpdateTitle={this.handleFormUpdate('title')}
              onUpdateBody={this.handleFormUpdate('body')}
              post={this.props.activePost}
              onSubmit={this.onSubmit}
            />
          </FlexChild>
          <FlexChild>
            <h3>Published posts</h3>
            <PostList>
              {this.props.allPosts.map(post => (
                <div key={post.id}>
                  <h4>{post.title}</h4>
                  <p>{post.body}</p>
                </div>
              ))}
            </PostList>
          </FlexChild>
        </FlexContainer>
      </div>
    );
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  getPosts,
  createUpdatePost
)(App);
