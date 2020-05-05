import React, { Component } from "react";
import axios from "axios";

class VoteUpdater extends Component {
  state = {
    voteDiff: 0,
  };

  handleVoteChange = (voteChange) => {
    const { article_id, comment_id } = this.props;

    const requestPath = comment_id
      ? "comments/" + comment_id
      : "articles/" + article_id;

    this.setState((currentState) => {
      return {
        voteDiff: currentState.voteDiff + voteChange,
      };
    });
    axios
      .patch(`https://hm-nc-news.herokuapp.com/api/${requestPath}`, {
        inc_votes: voteChange,
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { votes } = this.props;
    return (
      <div>
        <button
          onClick={() => {
            this.handleVoteChange(1);
          }}
          disabled={false}
        >
          upVote
        </button>
        <p>Accurate Votes: {this.state.voteDiff + votes}</p>
        <button
          onClick={() => {
            this.handleVoteChange(-1);
          }}
        >
          downVote
        </button>
      </div>
    );
  }
}

export default VoteUpdater;
