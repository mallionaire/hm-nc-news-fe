import React from "react";
import axios from "axios";

const DeleteComment = (props) => {
  //if err render a p tag with message 
  const { comment_id, filterDeletedComment, restoreComment } = props;

  const removeComment = (id) => {
    filterDeletedComment(id);
    axios
    .delete(`https://hm-nc-news.herokuapp.com/api/comments/${id}`)
      .catch((err) => {
        restoreComment()
      });
  };

  return (
    // <div>
    // {/* <p>{`${user} wrote this comment ^`} </p> */}
    <button
      onClick={() => {
        removeComment(comment_id);
      }}
    >
      Delete Comment
    </button>
    // </div>
  );
};

export default DeleteComment;
