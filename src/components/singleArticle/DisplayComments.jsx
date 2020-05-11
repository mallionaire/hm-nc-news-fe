import React, { Component } from "react";
import axios from "axios";
import VoteUpdater from "./VoteUpdater";
import AddComment from "./AddComment";
import DeleteComment from "./DeleteComment";
import ErrorPage from "../websiteStructure/ErrorPage";

class DisplayComments extends Component {
  state = {
    comments: [],
    isLoading: true,
    err: "",
    deletedComment: null,
  };

  updateComments = (commentToAdd) => {
    // console.log(commentToAdd);
    this.setState((currState) => {
      return { comments: [commentToAdd, ...currState.comments] };
    });
  };

  filterDeletedComment = (id) => {
    this.setState((currState) => {
      return {
        deletedComment: currState.comments[id],
        comments: [...currState.comments].filter((comment) => {
          return comment.comment_id !== id;
        }),
      };
    });
  };

  restoreComment = (id) => {
    this.setState((currState) => {
      return {
        comments: [currState.deletedComment, ...currState.comments],
        deletedComment: null,
      };
    });
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
          user={user}
        />
        <ul>
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id} className="comments-styling">
                <p>
                  {comment.body} <br />
                  {[
                    comment.author,
                    " ",
                    new Date(comment.created_at).toDateString(),
                  ]}
                </p>
                {comment.author === user ? (
                  <>
                    {this.state.deletedComment && <p>Can't delete</p>}
                    <DeleteComment
                      user={user}
                      comment_id={comment.comment_id}
                      filterDeletedComment={this.filterDeletedComment}
                      restoreComment={this.restoreComment}
                    />
                  </>
                ) : null}
                <VoteUpdater
                  comment_id={comment.comment_id}
                  votes={comment.votes}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default DisplayComments;
