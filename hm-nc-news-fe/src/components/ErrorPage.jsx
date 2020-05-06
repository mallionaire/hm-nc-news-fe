import React from "react";

const ErrorPage = ({ err }) => {
  return (
    <main>
      <h2>{err ? err : "Path not Found"}</h2>
    </main>
  );
};

export default ErrorPage;
