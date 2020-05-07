import React, { Component } from "react";
import { Router } from "@reach/router";

import "./App.css";
import Title from "./components/websiteStructure/Title";
import NavBar from "./components/websiteStructure/NavBar";
import Articles from "./components/AllArticles/Articles";
import SingleArticle from "./components/singleArticle/SingleArticle";
import ErrorPage from "./components/websiteStructure/ErrorPage";

// post comment - need to have an author <----- BE
// deleting comment - only delete own <---- FE

class App extends Component {
  state = {
    user: "jessjelly",
  };

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <Title user={user} />
        <NavBar />
        <Router>
          <Articles path="/" />
          <Articles path="/articles/:topic" />
          {/* <SingleArticle path="/articles/:topic/:article_id" /> */}
          <SingleArticle path="/:article_id" user={user} />
          <ErrorPage default />
        </Router>
      </div>
    );
  }
}

export default App;
