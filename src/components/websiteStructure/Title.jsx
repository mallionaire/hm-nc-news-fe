import React from "react";

const Title = ({ user }) => {
  return (
    <header >
      <h1>NORTHCODERS NEWS</h1>
      <h2 className="link">Bringing you new, improved News! </h2>
      <h3>{`Welcome ${user}`}</h3>
    </header>
  );
};

export default Title;
