import React from "react";
import axios from "axios";

const DeleteComment = (props) => {
  const { comment_id, filterDeletedComment } = props;
  return (
    <div>
      {/* <p>{`${user} wrote this comment ^`} </p> */}
      <button
        onClick={() => {
          removeComment(comment_id, filterDeletedComment);
        }}
      >
        Delete Comment
      </button>
    </div>
  );
};

export default DeleteComment;

const removeComment = (id, filterDeletedComment) => {
  filterDeletedComment(id);
  axios
    .delete(`https://hm-nc-news.herokuapp.com/api/comments/${id}`)
    .catch((err) => {
      console.log(err);
    });
};
