import React from "react";
import { Link } from "@reach/router";
// import OrderSelection from "./OrderSelection";

//rename to ArticleList - extract out the articleCard, unique key for each card needs to be on the section, at the moment its just on the "link"

const ArticleCard = (props) => {
  const { articles } = props;
  return (
    <div>
      {/* <OrderSelection /> */}
      {articles.map((article) => {
        return (
          <div key={article.article_id}>
            <h3>{article.title}</h3>
            <Link to={`/${article.article_id}`}>
              Read full article...
              {/* Is something in this <Link> preventing reach router finding the path to a single article if clicked from the homepage? */}
            </Link>
            <p>{article.topic}</p>
            <p>{article.votes}</p>
            <p>{new Date(article.created_at).toDateString()}</p>
            <p>{article.comment_count}</p>
            {
              article.body && (
                <p>{article.body}</p>
              ) /*should add the article body if a request is made to a specific article */
            }
          </div>
        );
      })}
    </div>
  );
};

export default ArticleCard;
