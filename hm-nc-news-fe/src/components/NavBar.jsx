import React from "react";
import { Link } from "@reach/router";
import Topics from "./Topics";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <h3>Homepage</h3>
      </Link>
      {/* <Link to="/topics">
        <h3>All Topics</h3>
      </Link> */}
      <Topics />
    </nav>
  );
};

export default NavBar;
