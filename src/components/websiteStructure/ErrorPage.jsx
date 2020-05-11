import React from "react";

const ErrorPage = ({ err }) => {
  return (
    <section>
      <h2>{err ? err : "Path not Found"}</h2>
    </section>
  );
};

export default ErrorPage;
