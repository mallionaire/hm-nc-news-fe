import React, { Component } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";
import OrderSelection from "./OrderSelection";

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: null,
  };

  // pass fuction to OrderSel -> update state & pass that to fetch aticles

  fetchArticles = () => {
    axios
      .get("https://hm-nc-news.herokuapp.com/api/articles", {
        params: {
          topic: this.props.topic,
          sort_by: this.state.sort_by,
        },
      })
      .then(({ data }) => {
        this.setState({
          articles: data.articles,
          isLoading: false,
        });
      });
  };

  selectSort = (valueToChange) => {
    this.setState({
      sort_by: valueToChange,
    });
    console.log("ran SelectSort", this.state.sort_by);
  };

  componentDidMount() {
    this.fetchArticles();
  }
  componentDidUpdate(prevProps, prevState) {
    // can accept prevState argument
    if (
      prevProps.topic !== this.props.topic ||
      prevState.sort_by !== this.state.sort_by
    ) {
      this.setState({ isLoading: true });
      this.fetchArticles();
    }
  }

  render() {
    const { isLoading, articles, sort_by } = this.state;
    if (isLoading) return <p>loading... </p>;
    return (
      <section>
        <OrderSelection sort_by={sort_by} selectSort={this.selectSort} />
        <ArticleCard articles={articles} key={articles.article_id} />
      </section>
    );
  }
}

export default Articles;

// need to add params.sort_by to enable ordering on the FE
// add buttons to allow a user to select a sort_by argument
// update the sort_by value in params to reflect this.
// make sure the page updates when a selection is changed...
