import React from "react";
import { Link } from "@reach/router";

//rename to ArticleList - extract out the articleCard, unique key for each card needs to be on the section, at the moment its just on the "link"

const ArticleCard = (props) => {
  const { articles } = props;
  return (
    <div className="articles">
      {articles.map((article) => {
        return (
          <article className="each-article" key={article.article_id}>
            <h3>{article.title}</h3>
            <Link to={`/${article.article_id}`}>
              Read full article...
              {/* Is something in this <Link> preventing reach router finding the path to a single article if clicked from the homepage? */}
            </Link>
            <p>{article.topic.toUpperCase()}</p>
            <p>
              {article.votes} votes | {article.comment_count} comments
            </p>

            <p>{new Date(article.created_at).toDateString()}</p>
          </article>
        );
      })}
    </div>
  );
};

export default ArticleCard;
