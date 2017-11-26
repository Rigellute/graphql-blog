// @flow
import React from 'react';
type Props = {
  post?: {
    title: string,
    body: string,
  },
  onUpdateTitle: (e: Event) => void,
  onUpdateBody: (e: Event) => void,
  onSubmit: (e: Event) => Promise<void>,
};

export default function PostForm(props: Props) {
  const { title = '', body = '' } = props.post || {};
  return (
    <form onSubmit={props.onSubmit}>
      <fieldset>
        <label>Title</label>
        <input
          onChange={props.onUpdateTitle}
          value={title}
          type="text"
          placeholder="Type here..."
        />
        <label>Body</label>
        <textarea
          placeholder="Type here..."
          onChange={props.onUpdateBody}
          value={body}
        />
        <input className="button-primary" type="submit" value="Post" />
      </fieldset>
    </form>
  );
}
