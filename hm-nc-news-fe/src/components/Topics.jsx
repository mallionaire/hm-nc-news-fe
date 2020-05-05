import React, { Component } from "react";
import axios from "axios";
import { Link } from "@reach/router";

class Topics extends Component {
  state = {
    topics: [],
    isLoading: true,
  };

  componentDidMount() {
    axios
      .get("https://hm-nc-news.herokuapp.com/api/topics")
      .then(({ data }) => {
        this.setState({
          topics: data.topics,
          isLoading: false,
        });
      });
  }

  render() {
    const { isLoading, topics } = this.state;
    if (isLoading) return <p>loading... </p>;
    return (
      <div>
        {topics.map((topic) => {
          return (
            <Link to={`/articles/${topic.slug}`} key={topic.slug}>
              {" "}
              {topic.slug}{" "}
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Topics;
