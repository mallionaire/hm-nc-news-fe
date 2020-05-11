import React, { Component } from "react";
// import axios from "axios";
import { Link } from "@reach/router";
import ErrorPage from "./ErrorPage";
import * as api from "../../utils/api";

class Topics extends Component {
  state = {
    topics: [],
    isLoading: true,
    err: "",
  };

  componentDidMount() {
    // axios
    //   .get("https://hm-nc-news.herokuapp.com/api/topics")
    api
      .getTopics()
      .then((topics) => {
        this.setState({
          topics: topics,
          isLoading: false,
        });
      })
      .catch((err) => {
        this.setState({ err: err.response.data.msg, isLoading: false });
        console.log(err);
      });
  }

  render() {
    const { isLoading, topics, err } = this.state;
    if (isLoading) return <p>loading... </p>;
    if (err) return <ErrorPage err={err} />;
    return (
      <>
        {topics.map((topic) => {
          return (
            <Link to={`/articles/${topic.slug}`} key={topic.slug}>
              {topic.slug.toUpperCase()}{" "}
            </Link>
          );
        })}
      </>
    );
  }
}

export default Topics;
