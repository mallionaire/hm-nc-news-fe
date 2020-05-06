import React, { Component } from "react";
import axios from "axios";
import ErrorPage from "./ErrorPage";

class VoteUpdater extends Component {
  state = {
    voteDiff: 0,
    err: ""
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
        this.setState({ err: err.response.data.msg });
        console.log(err);
      });
  };

  render() {
    const { votes} = this.props;
    const {err} = this.state 
    if (err ) return <ErrorPage err={err}/> 
    return (
      <div>
        <button
          onClick={() => {
            this.handleVoteChange(1);
          }}
          disabled={this.state.voteDiff === 1}
        >
          upVote
        </button>
        <p>Accurate Votes: {this.state.voteDiff + votes}</p>
        <button
          onClick={() => {
            this.handleVoteChange(-1);
          }}
          disabled={this.state.voteDiff === -1}
        >
          downVote
        </button>
      </div>
    );
  }
}

export default VoteUpdater;

