import React from "react";
import axios from "axios";

const DeleteComment = (props) => {
  const { user, comment_id, fetchComments } = props;
  return (
    <div>
      <p>{`${user} wrote this comment ^`} </p>
      <button
        onClick={() => {
          removeComment(comment_id, fetchComments);
        }}
      >
        Delete Comment
      </button>
    </div>
  );
};

export default DeleteComment;

const removeComment = (id, fetchComments) => {
  axios
    .delete(`https://hm-nc-news.herokuapp.com/api/comments/${id}`)
    .then(() => {
      fetchComments();
    })
    .catch((err) => {
      // this.setState({ err: err.response.data.msg });
      console.log(err);
    });
};

// does delete the comment from the API, but doesn't re-fetch them once its been done...
