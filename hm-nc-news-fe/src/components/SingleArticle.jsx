import React, { Component } from "react";
import SingleArticleCard from "./SingleArticleCard";
import axios from "axios";

class SingleArticle extends Component {
  state = {
    oneArticle: {},
    isLoading: true,
  };

  fetchSingleArticle = () => {
    const { article_id } = this.props;
    console.log(this.props.article_id);
    axios
      .get(`https://hm-nc-news.herokuapp.com/api/articles/${article_id}`)
      .then(({ data }) => {
        console.log(data);
        this.setState({
          oneArticle: data.article,
          isLoading: false,
        });
      });
  };

  componentDidMount() {
    this.fetchSingleArticle();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.article_id !== this.props.article_id) {
      this.setState({ isLoading: true });
      this.fetchSingleArticle();
    }
  }

  render() {
    const { oneArticle, isLoading } = this.state;
    if (isLoading) return <p>Sure, I'm just loading one Article... </p>;
    return (
      <div>
        <SingleArticleCard article={oneArticle} />
        {/* should really be a different articleCard for a single article, becuase this mucks up some of the logic 
        eg. displays 'read full article' when already on the page as a link, which just send the user to a strange endpoint
        also - cannot display an article directly from the preview on the homepage, only works if you go through the topics tab. */}
      </div>
    );
  }
}

export default SingleArticle;
