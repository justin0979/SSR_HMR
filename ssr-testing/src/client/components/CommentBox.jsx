import React from 'react';

class CommentBox extends React.Component {
  state = { count: 0, comment: '' };

  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => this.setState({ count: this.state.count - 1 });

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ comment: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} data-test="comment-box-form">
        <h4>Add a Comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button onClick={() => console.log('Submit text from CommentBox')}>
            Submit Comment
          </button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
