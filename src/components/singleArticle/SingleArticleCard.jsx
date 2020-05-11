import React from "react";
import DisplayComments from "./DisplayComments";
import VoteUpdater from "./VoteUpdater";

const SingleArticleCard = (props) => {
  const { article } = props;
  return (
    <main>
      <h3>{article.title}</h3>
      <p>
        {article.topic.toUpperCase()} |{" "}
        {new Date(article.created_at).toDateString()}
      </p>
      <p>Written by: {article.author}</p>

      <VoteUpdater article_id={article.article_id} votes={article.votes} />
      <p>{article.body}</p>
      <DisplayComments article_id={article.article_id} user={props.user} />
    </main>
  );
};

export default SingleArticleCard;
