import React, { Component } from "react";
import SingleArticleCard from "./SingleArticleCard";
import axios from "axios";
import ErrorPage from "../websiteStructure/ErrorPage";

class SingleArticle extends Component {
  state = {
    oneArticle: {},
    isLoading: true,
    err: "",
  };

  fetchSingleArticle = () => {
    const { article_id } = this.props;

    axios
      .get(`https://hm-nc-news.herokuapp.com/api/articles/${article_id}`)
      .then(({ data }) => {
        this.setState({
          oneArticle: data.article,
          isLoading: false,
        });
      })
      .catch((err) => {
        this.setState({ err: err.response.data.msg, isLoading: false });
        console.log(err);
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
    const { oneArticle, isLoading, err } = this.state;
    if (isLoading) return <p>Sure, I'm just loading one Article... </p>;
    if (err) return <ErrorPage err={err} />;
    return (
      <div>
        <SingleArticleCard article={oneArticle} user={this.props.user} />
      </div>
    );
  }
}

export default SingleArticle;
