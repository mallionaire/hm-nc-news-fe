import React, { Component } from "react";
import axios from "axios";
import VoteUpdater from "./VoteUpdater";
import AddComment from "./AddComment";
import DeleteComment from "./DeleteComment";
import ErrorPage from "./ErrorPage";

class DisplayComments extends Component {
  state = {
    comments: [],
    isLoading: true,
    err: "",
  };

  updateComments = ({ username, body }) => {
    this.setState({
      comments: [
        { author: username, body: body, created_at: Date.now(), votes: 0 },
        ...this.state.comments,
      ],
    });
    console.log(this.state.comments);
  };

  filterDeletedComment = (id) => {
    const newComments = [...this.state.comments];
    // needs currState 
    const filteredComments = newComments.filter(comment => {
     return comment.comment_id !== id
    })
    this.setState({ comments: filteredComments})
  };

  fetchComments = () => {
    const { article_id } = this.props;
    axios
      .get(
        `https://hm-nc-news.herokuapp.com/api/articles/${article_id}/comments`
      )
      .then(({ data }) => {
        this.setState({
          comments: data.comments,
          isLoading: false,
        });
      })
      .catch((err) => {
        this.setState({ err: err.response.data.msg });
        console.log(err);
      });
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    const { isLoading, comments, err } = this.state;
    const { user, article_id } = this.props;
    if (isLoading) return <p>loading comments... </p>;
    if (err) return <ErrorPage err={err} />;
    return (
      <div>
        <AddComment
          article_id={article_id}
          updateComments={this.updateComments}
          // fetchComments={this.fetchComments}
          user={user}
        />
        {comments.map((comment) => {
          return (
            <ul key={comment.comment_id}>
              <h6>
                {comment.body} <br />
                {[
                  comment.author,
                  " ",
                  new Date(comment.created_at).toDateString(),
                  " ",
                  comment.votes,
                ]}
              </h6>
              {comment.author === user ? (
                <DeleteComment
                  user={user}
                  comment_id={comment.comment_id}
                  fetchComments={this.fetchComments}
                />
              ) : null}
              <VoteUpdater
                comment_id={comment.comment_id}
                votes={comment.votes}
              />
            </ul>
          );
        })}
      </div>
    );
  }
}

export default DisplayComments;
