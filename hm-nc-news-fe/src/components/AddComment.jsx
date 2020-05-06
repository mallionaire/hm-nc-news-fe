import React, { Component } from "react";
import axios from "axios";
import ErrorPage from "./ErrorPage";

class AddComment extends Component {
  state = {
    username: "jessjelly",
    comment: "",
    err: "",
  };

  render() {
    const { comment, err } = this.state;
    if(err) return <ErrorPage err={err}/>
    return (
      <form onSubmit={this.postComment}>
        <label>
          Type your comment here...
          <input type="text" onChange={this.handleChange} value={comment} />
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
    const { article_id, fetchComments, user } = this.props;
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
      .then(() => {
        this.setState({
          comment: "",
        });
        fetchComments();
      })
      .catch((err) => {
        this.setState({ err: err.response.data.msg });
        console.log(err);
      });
    // console.log(newComment, this.props.article_id);
  };
}

export default AddComment;
