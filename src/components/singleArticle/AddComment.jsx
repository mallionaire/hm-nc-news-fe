import React, { Component } from "react";
import axios from "axios";
import ErrorPage from "../websiteStructure/ErrorPage";

class AddComment extends Component {
  state = {
    username: "jessjelly",
    comment: "",
    err: "",
  };

  render() {
    const { comment, err } = this.state;
    if (err) return <ErrorPage err={err} />;
    return (
      <form onSubmit={this.postComment} className="input-text">
        <label>
          Type your comment here...
          <input
            type="text"
            onChange={this.handleChange}
            value={comment}
            className="input-field"
          />
        </label>
        <button disabled={comment.length === 0}>Add your comment!</button>
      </form>
    );
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({
      comment: value,
    });
  };

  postComment = (event) => {
    const { article_id, updateComments, user } = this.props;
    event.preventDefault();
    const newComment = {
      username: user,
      body: this.state.comment,
    };
    axios
      .post(
        `https://hm-nc-news.herokuapp.com/api/articles/${article_id}/comments`,
        newComment
      )
      .then((response) => {
        this.setState({
          comment: "",
        });
        console.log(response);
        updateComments(response.data.comment);
        // fetchComments();
      })
      .catch((err) => {
        this.setState({ err: err.response.data.msg });
        console.log(err);
      });
    // console.log(newComment, this.props.article_id);
  };
}

export default AddComment;
