import React from "react";
import "./Error.css";
import { ReactComponent as ErrorImg } from "../img/error.svg";

const Error = () => {
  return (
    <section className="error">
      <div className="error__content">
        {/* <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3> */}
        <ErrorImg className="error__content-img" />
      </div>
    </section>
  );
};

export default Error;
