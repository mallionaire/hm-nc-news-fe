import React, { Component } from "react";
import axios from "axios";
import VoteUpdater from "./VoteUpdater";

class DisplayComments extends Component {
  state = {
    comments: [],
    isLoading: true,
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
      });
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    const { isLoading, comments } = this.state;
    if (isLoading) return <p>loading comments... </p>;
    return (
      <div>
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
              <VoteUpdater
                comment_id={comment.comment_id}
                votes={comment.votes}
              />
              {/* need to pass comment_id on props and then differenciate between comment and article_id in the voteUpdater... */}
            </ul>
          );
        })}
      </div>
    );
  }
}

export default DisplayComments;
