var React = require('react');

var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    )
  }
})

var CommentList = React.createClass({
  render: function() {
    var node = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author}>
          {comment.content}
        </Comment>
      )
    })
    return (
      <div className="commentList">
        {node}
      </div>
    )
  }
})

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, I am a CommentFrom
      </div>
    )
  }
})

var CommentBox = React.createClass({
  render: function() {
    var data = [
      {author: 'tom', content: '123'},
      {author: 'jerry', content: 'abc'},
      {author: 'jerry', content: '456'},
      {author: 'jerry', content: '789'}
    ]
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={data}/>
        <CommentForm />
      </div>
    );
  }
})

module.exports = CommentBox;
