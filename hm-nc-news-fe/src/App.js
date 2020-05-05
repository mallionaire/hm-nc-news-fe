import React from "react";
import { Router } from "@reach/router";

// import "./App.css";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";

// post comment - need to have an author <----- BE
// deleting comment - only delete own <---- FE

function App() {
  return (
    <div>
      <Title />
      <NavBar />
      <Router>
        <Articles path="/" />
        <Articles path="/articles/:topic" />
        {/* <SingleArticle path="/articles/:topic/:article_id" /> */}
        <SingleArticle path="/:article_id" />
      </Router>
    </div>
  );
}

export default App;
